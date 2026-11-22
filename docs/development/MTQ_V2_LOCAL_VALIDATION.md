# Verificación local — Magic Tree QR V2

Este procedimiento es exclusivamente de desarrollo local: sin CI/CD y sin despliegue.

Desde la raíz de la rama feat/mtq-master-plan-v2-qr-integrity:

    npm run verify:local -- --install

El script instala dependencias con el lockfile, ejecuta todas las pruebas
unitarias y de integración de Node y compila el proyecto con Vite.
Registra códigos de salida, versión Node, Git SHA y logs, calcula hashes SHA256
y crea un ZIP privado en tools/reports/mtq-v2/<ID>/<ID>.zip.

No hace commits, no borra archivos originales, no publica datos ni hace push.
Los informes se excluyen de Git.

No certifica escenas WebGPU, captura de cuatro estaciones ni dispositivos.
Para eso continuar con MTQ_V2_MANUAL_QA.md. En caso de error, el ZIP permite
diagnosticar el problema, sin declarar que las pruebas pasaron.
