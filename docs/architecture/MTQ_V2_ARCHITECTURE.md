# MAGIC TREE QR — Arquitectura modular V2 (primera extracción)

## Flujo de datos real de esta rama

    Entrada formulario / imagen / enlace / sesión
                       |
               Validación canónica QR
                       |
           +-----------+-----------+
           |                       |
      Error explícito       Payload y matriz QR
      Bloquear exportar        |      |      |
                          Árbol 3D  SVG   PNG
                          WebGPU      estándar
                             |
                         PNG artístico
                           (actual)

Si WebGPU está ausente, el adaptador falla o se pierde el dispositivo,
StandardQRMode permite crear un QR convencional, con capacidad de QR versión 40.

## Contratos implementados

- createQRService(encoder, options) : generate(payload) y validate(payload).
- generate devuelve success, payload, matrix, size y errorCorrectionLevel,
  o un error estructurado sin matriz ni sustitución de contenido.
- encodeShareToken / decodeShareToken: formato de enlace compartido compatible
  con el original, con verificaciones de tipos, metadatos y Base64.
- createQRStandardSVG / createQRStandardPNGDataURL: exportan directamente
  los módulos de la matriz y añaden zona de silencio.
- readInitialQRState: no reemplaza explícitamente enlaces corruptos por el default.

## Límites deliberados

Todavía se conservan la implementación WebGPU, la geometría y los shaders
originales en src/main.jsx. Sus extracciones son posteriores a las pruebas
visuales y funcionales de referencia. No se han añadido sistemas hipotéticos
de plugins ni diseños alternativos.
