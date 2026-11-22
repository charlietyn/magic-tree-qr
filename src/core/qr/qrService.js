/** Canonical QR boundary. Existing encoder is injected; React and WebGPU are not imported. */
export const QR_ERRORS = Object.freeze({
  EMPTY: "QR_INVALID_INPUT",
  CAPACITY: "QR_CAPACITY_EXCEEDED",
  ENCODING: "QR_ENCODING_FAILED"
});

function fail(code, error, payload) {
  return { success: false, valid: false, code, error, payload, matrix: null };
}
export function createQRService(encoder, options = {}) {
  const encode = typeof encoder === "function" ? encoder :
    typeof encoder?.create === "function" ? encoder.create.bind(encoder) : null;
  if (!encode) throw new TypeError("A QR encoder with create(payload, options) is required.");
  const maxMatrixSize = options.maxMatrixSize ?? 41;
  const errorCorrectionLevel = options.errorCorrectionLevel ?? "M";

  function generate(payload) {
    if (typeof payload !== "string" || payload.trim().length === 0) {
      return fail(QR_ERRORS.EMPTY, "Introduce texto o una URL para generar el QR.", payload);
    }
    try {
      const modules = encode(payload, { errorCorrectionLevel })?.modules;
      const size = modules?.size;
      if (!Number.isInteger(size) || size < 21 || size % 4 !== 1 || typeof modules.get !== "function") {
        return fail(QR_ERRORS.ENCODING, "El codificador devolvió una matriz QR inválida.", payload);
      }
      if (size > maxMatrixSize) {
        return fail(QR_ERRORS.CAPACITY, "El contenido excede la capacidad del árbol QR. Reduce el contenido.", payload);
      }
      const matrix = Array.from({length: size}, (_, row) =>
        Object.freeze(Array.from({length: size}, (_, col) => Boolean(modules.get(col, row)))));
      Object.freeze(matrix);
      return { success: true, valid: true, code: null, error: "", payload, matrix, size, errorCorrectionLevel };
    } catch (cause) {
      const isCapacity = /too big|too long|capacity|overflow|amount of data|maximum/i.test(String(cause?.message ?? ""));
      return fail(isCapacity ? QR_ERRORS.CAPACITY : QR_ERRORS.ENCODING,
        isCapacity ? "El contenido excede la capacidad admitida por el QR. Reduce el contenido." :
          "No se pudo codificar el QR. Corrige la entrada y vuelve a intentarlo.", payload);
    }
  }
  function validate(payload) {
    const r = generate(payload);
    return { valid: r.success, code: r.code, error: r.error, payload: r.payload, size: r.size ?? null };
  }
  return Object.freeze({ generate, validate, maxMatrixSize, errorCorrectionLevel });
}
