# Magic Tree QR V2 — matriz de QA manual (MTQ-0002 / 0003 / 7004)

Comparar visualmente main y la rama V2. Guardar versión del navegador,
GPU, OS, SHA de Git, escenario, captura, estado y errores relevantes.

| ID | Escenario | Criterio de aceptación |
|---|---|---|
| QA-01 | WebGPU + primavera | Árbol y flores idénticos a main |
| QA-02 | Verano | Geometría, partículas y mariposas preservadas |
| QA-03 | Otoño | Lluvia, geometría y paleta preservadas |
| QA-04 | Invierno | Nieve, árboles y control de paleta coherentes |
| QA-05 | Vista 3D / cenital | Transición fluida y sin QR incorrecto |
| QA-06 | Unicode, emojis, saltos de línea | Decodificación exacta independiente |
| QA-07 | Enlace /s/ y query ?q= | Mismo contenido y metadatos |
| QA-08 | Enlaces corruptos | Error visible; sin URL por defecto |
| QA-09 | 500 caracteres | Árbol rechaza cuando no cabe; 2D acepta |
| QA-10 | Imagen PNG/JPEG, Ctrl+V y drag/drop | Extrae contenido y rechaza archivo >10MB |
| QA-11 | Exportación estándar PNG / SVG | Cámara QR independiente recupera el mismo texto |
| QA-12 | ZIP en WebGPU | QR estándar, SVG, metadata y arte opcional |
| QA-13 | Navegador sin WebGPU | Generador, PNG, SVG y ZIP estándar funcionan |
| QA-14 | Dispositivo GPU perdido | Cambio a modo 2D sin congelar el sitio |
| QA-15 | Menú compartir | Teclado Tab, Enter y Escape |
| QA-16 | Android/iOS | Responsive, gestos y exportación |
| QA-17 | Pestaña no visible | RAF suspendido y reanudación correcta |
| QA-18 | Música | Volumen, mute, cambio y audio estacional |

No modificar shaders sin capturas comparativas. La escena artística
no se presupone escaneable como un QR convencional.
No publicar en capturas URL privadas o tokens de enlace sin consentimiento.
