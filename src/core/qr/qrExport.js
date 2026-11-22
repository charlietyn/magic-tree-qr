/** Deterministic standard QR SVG/PNG with a mandatory quiet zone. */
function dimensions(matrix, options) {
  const n = matrix?.length;
  if (!Number.isInteger(n) || n < 21 || !matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new TypeError("A square QR matrix is required.");
  }
  const moduleSize = options.moduleSize ?? 8;
  const quietZone = options.quietZone ?? 4;
  if (!Number.isInteger(moduleSize) || moduleSize < 1 || moduleSize > 256 ||
      !Number.isInteger(quietZone) || quietZone < 4 || quietZone > 32) {
    throw new RangeError("Invalid QR export dimensions.");
  }
  return { n, moduleSize, quietZone, side: (n + 2 * quietZone) * moduleSize };
}
export function createQRStandardSVG(matrix, options = {}) {
  const { n, moduleSize, quietZone, side } = dimensions(matrix, options);
  const rects = [];
  for (let row = 0; row < n; row++) for (let col = 0; col < n; col++) {
    if (matrix[row][col]) rects.push('<rect x="' + ((col + quietZone) * moduleSize) +
      '" y="' + ((row + quietZone) * moduleSize) + '" width="' + moduleSize +
      '" height="' + moduleSize + '"/>');
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + side + '" height="' + side +
    '" viewBox="0 0 ' + side + ' ' + side + '" shape-rendering="crispEdges">' +
    '<rect width="100%" height="100%" fill="#ffffff"/><g fill="#000000">' +
    rects.join("") + '</g></svg>';
}
export function createQRStandardPNGDataURL(matrix, options = {}) {
  if (typeof document === "undefined") throw new Error("PNG export requires a browser canvas.");
  const { n, moduleSize, quietZone, side } = dimensions(matrix, options);
  const canvas = document.createElement("canvas");
  canvas.width = side;
  canvas.height = side;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not initialize PNG canvas.");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, side, side);
  context.fillStyle = "#000000";
  for (let row = 0; row < n; row++) for (let col = 0; col < n; col++) {
    if (matrix[row][col]) {
      context.fillRect((col + quietZone) * moduleSize, (row + quietZone) * moduleSize, moduleSize, moduleSize);
    }
  }
  return canvas.toDataURL("image/png");
}
