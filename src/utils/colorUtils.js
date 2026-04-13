//generate random hsl-color-code
export function generateRandomHsl(range = null) {
  const hMin = range?.hMin ?? 0;
  const hMax = range?.hMax ?? 360;
  const sMin = range?.sMin ?? 0;
  const sMax = range?.sMax ?? 100;
  const lMin = range?.lMin ?? 0;
  const lMax = range?.lMax ?? 100;

  const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
  const s = Math.floor(Math.random() * (sMax - sMin) + sMin);
  const l = Math.floor(Math.random() * (lMax - lMin) + lMin);

  return { h, s, l };
}

//convert from hsl to hex-color-code
export function hslToHex({ h, s, l }) {
  s /= 100;
  l /= 100;

  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);

  const f = (n) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))),
    );

  return `#${[f(0), f(8), f(4)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("")}`;
}

//convert from hsl to rgb-color-code
export function hslToRgb({ h, s, l }) {
  s /= 100;
  l /= 100;

  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);

  const f = (n) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))),
    );

  const r = f(0);
  const g = f(8);
  const b = f(4);

  return `rgb(${r}, ${g}, ${b})`;
}

export function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}
