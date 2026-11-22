# MAGIC TREE QR — Registro de ejecución MASTER PLAN V2.0

**Repositorio:** charlietyn/magic-tree-qr  
**Rama:** feat/mtq-master-plan-v2-qr-integrity  
**Base:** main@c064f61f5adb6daf38450609c1adff937b08289d  
**Restricciones:** conservar árboles/shaders; sin DevOps, CI/CD ni despliegue.

## Estado de las nueve fases

| Fase | Estado de este ciclo | Evidencia / pendiente |
|---|---|---|
| 0 Diagnóstico | PARCIAL | Mapa estático de módulos y código empaquetado; referencias gráficas reales pendientes. |
| 1 Integridad QR | AVANZADA | Sin fallback silencioso; payload original; codec/estado inicial protegidos. Falta round-trip independiente en navegador y cerrar carreras. |
| 2 Testing | PARCIAL | Tests Node unitarios y round-trip independiente con jsQR; ejecución npm test pendiente. V8 12/12 QR y 8/8 ZIP. Faltan Vitest/RTL/Playwright/visuales. |
| 3 Arquitectura | PARCIAL | Codificador original y 52 estilos React extraídos. React y GPU siguen compartiendo el monolito; hay un único dispatcher para modo 2D. |
| 4 Correcciones | PARCIAL | Importación limitada y manejo de errores; manifiesto usa iconos existentes. Pendiente audio y paleta invernal. |
| 5 WebGPU | PARCIAL | QR 2D sin GPU, tratamiento de device loss, suspensión RAF en pestaña oculta y limpieza al desmontar. Falta probarlo en hardware real. |
| 6 Funcionalidades | PARCIAL | PNG/SVG estándar y paquete ZIP sin dependencias en 3D y 2D. Galería, lotes, presets, i18n pendientes. |
| 7 Consolidación | PENDIENTE | Menú compartir con botones de teclado y aviso de privacidad. Falta auditoría completa, multi-navegador y regresión visual. |
| 8 Diseños nuevos | BLOQUEADA | No se empieza hasta finalizar las anteriores. |

## Cambios reales realizados

- QR original trasladado a src/core/qr/vendor/qrEncoder.js; probado con vectores y hashes fijos.
- src/core/qr/qrService.js valida exactitud y capacidad: máximo 41 módulos para el árbol y 177 para el QR convencional.
- src/core/qr/shareCodec.js y initialState.js impiden que un enlace corrupto vuelva silenciosamente a una URL predeterminada.
- src/core/qr/qrExport.js genera PNG/SVG convencional con quiet zone de cuatro módulos.
- src/components/StandardQRMode.jsx ofrece editor y exportación sin WebGPU.
- src/main.jsx conecta servicios, deshabilita compartir durante borradores no confirmados, protege carga de imágenes y atiende fallos de GPU.
- public/favicon/site.webmanifest ahora apunta a recursos presentes en Git; aún faltan iconos PNG 192/512 para validar instalación PWA.
- src/styles/treeStyles.js conserva intactos los 52 grupos de estilos originales; tests/unit valida la extracción.
- src/features/export/zipWriter.js crea ZIP32 con CRC32, nombres seguros y límite de tamaño.
- tests/integration/roundTrip.test.js prueba la lectura QR con jsQR, independiente del codificador original.
- tests/unit contiene suites para codificación real, errores, exportación, serialización, manifiesto, límites React y ZIP.
- tools/verify-local.mjs permite ejecutar npm ci, npm test, npm run build y descargar ZIP privado con logs/hashes.
- El botón compartir muestra una advertencia: Base64 no cifra datos; la app deja de publicar automáticamente el payload en la URL.

## Pruebas realmente ejecutadas

**12/12 comprobaciones QR y 8/8 comprobaciones ZIP correctas** en motor V8 aislado.
Para el QR se utilizaron adaptadores de API de navegador. También se verificó
con el codificador real la capacidad 2D (177 módulos), la preservación Unicode,
la serialización y los enlaces corruptos. Las nuevas suites Node de jsQR y ZIP
**están escritas pero no ejecutadas en el clon completo**. No se ha ejecutado
npm test, npm run build, Playwright, captura de cuatro estaciones ni escaneo real
con cámara. No se asume compatibilidad de navegador sin esas pruebas.

## Validación pendiente para cerrar MTQ-0002/0003/1005/1006

Ejecutar desde la raíz:

    npm run verify:local -- --install
    npm run dev

El primer comando crea un ZIP de evidencias privadas con salida de compilación
y pruebas en tools/reports/mtq-v2/. Consultar MTQ_V2_MANUAL_QA.md.

Escenarios críticos: URL y Unicode exactos; QR con espacios y saltos de línea;
enlaces /s/ y ?q= corruptos; contenido de 500 caracteres (rechazo artístico y
éxito 2D); PNG/SVG escaneables y comparados byte a byte; importación por archivo,
drag-drop y Ctrl+V; Chrome/Edge con y sin WebGPU; captura de las cuatro estaciones
en vista 3D/cenital y dispositivos móviles.

## Riesgos abiertos

La escena artística no tiene garantía universal de ser escaneable.
El núcleo React/WebGPU sigue mayoritariamente monolítico y los shaders no se han modificado.
Audio otoño/invierno contiene el mismo blob Git; se necesitan activos de audio
diferenciados. Personalización invernal pendiente de referencias gráficas.
Pueden existir fugas del motor GPU y regresiones no descubiertas por pruebas
estáticas. El soporte PWA completo requiere iconos de mayor resolución.

## Próximo trabajo, según las dependencias del plan

1. MTQ-0002/0003: compilar, probar manualmente y capturar baseline GPU/visual.
2. MTQ-1005/1006: ejecutar la suite independiente jsQR y certificar carreras de estados en navegador.
3. MTQ-2002/2003: React Testing Library / pruebas de navegador.
4. MTQ-3003+: extracciones pequeñas de estado, UI, geometría y shaders.
5. Fases 4 a 7 restantes; Fase 8 opcional y estrictamente al final.

**El plan no está finalizado y la rama no debe fusionarse sin pruebas de
compilación, integridad QR, navegadores y preservación visual.**
