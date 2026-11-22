// Hooks are injected by the parent because the existing app bundles its own React runtime.
import { createQRStandardSVG, createQRStandardPNGDataURL } from "../core/qr/qrExport.js";

function downloadURL(url, name) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Working QR generator when WebGPU is absent; original artistic mode remains untouched. */
export default function StandardQRMode({ initialPayload, qrService, reactHooks }) {
  const {useMemo, useState} = reactHooks;
  const [payload, setPayload] = useState(initialPayload);
  const result = useMemo(() => qrService.generate(payload), [payload, qrService]);
  const svg = useMemo(() => result.success ? createQRStandardSVG(result.matrix) : "", [result]);

  function exportSVG() {
    if (!result.success) return;
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
    try { downloadURL(url, "magic-tree-qr-standard.svg"); }
    finally { setTimeout(() => URL.revokeObjectURL(url), 1000); }
  }
  function exportPNG() {
    if (!result.success) return;
    try {
      downloadURL(createQRStandardPNGDataURL(result.matrix), "magic-tree-qr-standard.png");
    } catch (error) {
      window.alert("No se pudo exportar PNG: " + String(error?.message ?? error));
    }
  }

  return <main style={{ minHeight: "100vh", boxSizing: "border-box", padding: "32px 16px",
    background: "#f7f3ec", color: "#342b25", fontFamily: "system-ui, sans-serif" }}>
    <div style={{ maxWidth: 650, margin: "auto", padding: 24, background: "#fff", borderRadius: 18,
      boxShadow: "0 8px 35px #342b2519" }}>
      <h1 style={{ marginTop: 0 }}>Magic Tree QR · Modo estándar</h1>
      <p role="status">WebGPU no está disponible. Puedes generar y descargar QR convencionales;
        las escenas 3D requieren WebGPU.</p>
      <label htmlFor="standard-qr-payload" style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>
        Texto o URL que se codificará sin modificaciones
      </label>
      <textarea id="standard-qr-payload" rows={3} value={payload}
        onChange={event => setPayload(event.target.value)}
        style={{ boxSizing: "border-box", width: "100%", padding: 12, borderRadius: 8,
          border: "1px solid #c9b7a4", font: "inherit" }} />
      {!result.success && <p role="alert" style={{ color: "#aa2d27" }}>{result.error}</p>}
      {result.success && <div style={{ textAlign: "center", margin: "24px auto" }}>
        <img width={280} height={280}
          src={"data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg)}
          alt="Código QR convencional del contenido indicado"
          style={{ width: "min(100%, 280px)", height: "auto", imageRendering: "pixelated" }} />
        <p style={{ fontSize: 13, color: "#6e5d4e" }}>Matriz {result.size} × {result.size}
          · Corrección {result.errorCorrectionLevel}</p>
      </div>}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button type="button" disabled={!result.success} onClick={exportPNG}>Descargar PNG</button>
        <button type="button" disabled={!result.success} onClick={exportSVG}>Descargar SVG</button>
      </div>
      <p style={{ fontSize: 13, color: "#6e5d4e" }}>
        La integridad del QR estándar es independiente de los efectos artísticos del árbol.
      </p>
    </div>
  </main>;
}
