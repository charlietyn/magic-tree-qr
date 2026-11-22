# Magic Tree QR — Línea base del plan maestro V2

**Rama:** feat/mtq-master-plan-v2-qr-integrity  
**Origen:** main@c064f61f5adb6daf38450609c1adff937b08289d

## Inspección estática MTQ-0001 / MTQ-0004

| Dominio | Fuente actual aproximada | Observaciones |
|---|---|---|
| QR integrado | src/main.jsx líneas 16284 y 16366-16388 | Un fallback sustituía payloads no codificables por una URL. |
| Validación | src/main.jsx líneas 17876-17905 | Algunas vías de entrada evitan el formulario. |
| Geometría | src/main.jsx líneas 16410-16957 | Árbol procedimental y matrices. |
| WebGPU | src/main.jsx líneas 16958-17200 y 18361-19100 | Shaders WGSL, recursos y bucle de renderizado. |
| React/UX | src/main.jsx líneas 17906-19504 | Componentes, estado, compartir e importaciones acoplados. |
| Audio | public/audio | autumn.mp3 y winter.mp3 contienen el mismo blob Git. |

El archivo principal incluye código de terceros previamente empaquetado; no retirarlo sin conservar sus contratos. No se identificaron servicios backend propios. Mantener WebGPU, geometría y estaciones intactos mientras se protege el QR.

## Invariantes de ingeniería

1. Payload original sin sustituciones silenciosas; errores explícitos.
2. La matriz sólo se publica cuando cabe en 41 módulos (límite del renderizador artístico actual).
3. Exportar siempre desde la misma matriz QR validada; SVG/PNG con zona de silencio.
4. Escenas artísticas no necesariamente escaneables; comprobar independientemente.
5. Sin DevOps, acciones CI/CD, backend, ni nuevos diseños artísticos antes de estabilizar.

## Evidencia todavía pendiente (MTQ-0002 / MTQ-0003)

Ejecutar manualmente en navegadores WebGPU y recoger capturas de primavera, verano, otoño, invierno; vistas 3D y superior; distintas paletas, QR y dispositivos. Los shaders y los FPS no pueden validarse mediante inspección estática.

## Plan de avance

- MTQ-1001 a 1004: servicio canónico, validación centralizada y sin fallback silencioso.
- MTQ-1005: validar que los PNG/SVG se decodifiquen con un lector QR independiente en navegador.
- MTQ-1006: asegurar que exportación/compartición no utilicen estados obsoletos.
- MTQ-2001: protección unitaria de QR con Node.
- Posteriormente, extraer React/WebGPU incrementalmente, corregir defectos y medir antes de ampliar el sistema.

**Verificaciones de compilación, integración, dispositivos reales y regresión visual requieren ejecución independiente.**
