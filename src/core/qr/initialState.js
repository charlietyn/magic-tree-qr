import { decodeBase64URL, decodeShareToken } from "./shareCodec.js";

/** Read initial QR document without silently replacing corrupt, explicitly provided tokens. */
export function readInitialQRState({ pathname = "/", search = "", readSession = () => null,
  defaultPayload = "" } = {}) {
  let previous = {};
  try {
    const value = readSession();
    if (value) {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) previous = parsed;
    }
  } catch {
    // Broken or blocked session storage never prevents opening the application.
  }
  const muted = typeof previous.muted !== "boolean" || previous.muted;
  const params = new URLSearchParams(search);
  const invalid = "Enlace QR inválido o corrupto. El contenido no ha sido sustituido.";
  const initialError = sharedMode => ({
    url: "", season: 1, palette: -1, muted, sharedMode, error: invalid
  });

  if (pathname.startsWith("/s/")) {
    const match = /^\/s\/([A-Za-z0-9_-]+)$/.exec(pathname);
    if (!match) return initialError(false);
    const parsed = decodeShareToken(match[1]);
    return parsed ? {...parsed, muted, sharedMode: true, error: null} : initialError(false);
  }
  if (params.has("q")) {
    const parsed = decodeShareToken(params.get("q"));
    return parsed ? {...parsed, muted, sharedMode: false, error: null} : initialError(false);
  }
  if (params.has("u")) {
    const payload = decodeBase64URL(params.get("u"));
    if (typeof payload !== "string" || payload.trim() === "") return initialError(false);
    const season = Number.parseInt(params.get("s") ?? "", 10);
    const palette = Number.parseInt(params.get("c") ?? "", 10);
    return {
      url: payload,
      season: Number.isFinite(season) ? Math.min(3, Math.max(0, season)) : 1,
      palette: Number.isFinite(palette) ? Math.min(5, Math.max(-1, palette)) : -1,
      muted, sharedMode: params.get("m") === "1", error: null
    };
  }
  const payload = typeof previous.url === "string" ? previous.url : defaultPayload;
  return {
    url: payload,
    season: typeof previous.season === "number" ? Math.min(3, Math.max(0, previous.season)) : 1,
    palette: typeof previous.palette === "number" ? Math.min(5, Math.max(-1, previous.palette)) : -1,
    muted, sharedMode: params.get("m") === "1", error: null
  };
}
