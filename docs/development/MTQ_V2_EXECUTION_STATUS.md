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
| 2 Testing | PARCIAL | Tests Node redactados; ejecución npm test pendiente. V8 smoke 12/12. Faltan RTL/Playwright/visuales. |
| 3 Arquitectura | PARCIAL | Codificador vendorizado extraído de src/main.jsx. React, geometría y GPU todavía acoplados. |
| 4 Correcciones | PARCIAL | Importación limitada y manejo de errores; manifiesto usa iconos existentes. Pendiente audio y paleta invernal. |
| 5 WebGPU | PARCIAL | Modo QR 2D para ausencia/fallo del dispositivo; optimización profunda pendiente. |
| 6 Funcionalidades | PARCIAL | QR estándar PNG/SVG, exportación artística preservada. ZIP, galería, lotes, etc. pendientes. |
| 7 Consolidación | PENDIENTE | Sin pruebas multi-navegador, accesibilidad y regresión visual. |
| 8 Diseños nuevos | BLOQUEADA | No se empieza hasta finalizar las anteriores. |

## Cambios reales realizados

- QR original trasladado a src/core/qr/vendor/qrEncoder.js; probado con vectores y hashes fijos.
- src/core/qr/qrService.js valida exactitud y capacidad: máximo 41 módulos para el árbol y 177 para el QR convencional.
- src/core/qr/shareCodec.js y initialState.js impiden que un enlace corrupto vuelva silenciosamente a una URL predeterminada.
- src/core/qr/qrExport.js genera PNG/SVG convencional con quiet zone de cuatro módulos.
- src/components/StandardQRMode.jsx ofrece editor y exportación sin WebGPU.
- src/main.jsx conecta servicios, deshabilita compartir durante borradores no confirmados, protege carga de imágenes y atiende fallos de GPU.
- public/favicon/site.webmanifest ahora apunta a recursos presentes en Git; aún faltan iconos PNG 192/512 para validar instalación PWA.
- tests/unit contiene tests de codificación real, errores, exportación, serialización y manifiesto.

## Pruebas realmente ejecutadas

**12/12 afirmaciones de integración lógica correctas**, en motor V8 aislado
con adaptadores para API de codificación, URL y Base64. Comprobadas: codificador real,
Unicode, capacidad artística y estándar, QR SVG, token compartido, sesión y enlace
corrupto. **No se ejecutaron** npm test, npm run build, Playwright, tests GPU,
ni escaneo QR desde una imagen exportada.

## Validación pendiente para cerrar MTQ-0002/0003/1005/1006

Ejecutar desde la raíz:

    npm ci
    npm test
    npm run build
    npm run dev

Escenarios críticos: URL y Unicode exactos; QR con espacios y saltos de línea;
enlaces /s/ y ?q= corruptos; contenido de 500 caracteres (rechazo artístico y
éxito 2D); PNG/SVG escaneables y comparados byte a byte; importación por archivo,
drag-drop y Ctrl+V; Chrome/Edge con y sin WebGPU; captura de las cuatro estaciones
en vista 3D/cenital y dispositivos móviles.

## Riesgos abiertos

La escena artística no tiene garantía universal de ser escaneable.
El archivo React/GPu sigue siendo monolítico y sus shaders no se han modificado.
Audio otoño/invierno contiene el mismo blob Git; se necesitan activos de audio
diferenciados. Personalización invernal pendiente de referencias gráficas.
Pueden existir fugas del motor GPU y regresiones no descubiertas por pruebas
estáticas. El soporte PWA completo requiere iconos de mayor resolución.

## Próximo trabajo, según las dependencias del plan

1. MTQ-0002/0003: compilar, probar manualmente y capturar baseline GPU/visual.
2. MTQ-1005/1006: pruebas independientes de lectura QR y carreras de estados.
3. MTQ-2002/2003: React Testing Library / pruebas de navegador.
4. MTQ-3003+: extracciones pequeñas de estado, UI, geometría y shaders.
5. Fases 4 a 7 restantes; Fase 8 opcional y estrictamente al final.

**El plan no está finalizado y la rama no debe fusionarse sin pruebas de
compilación, integridad QR, navegadores y preservación visual.**
