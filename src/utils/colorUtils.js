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

export const colorRanges = {
  purple: { hMin: 260, hMax: 290, sMin: 40, sMax: 100, lMin: 30, lMax: 70 },
  blue: { hMin: 200, hMax: 240, sMin: 40, sMax: 100, lMin: 30, lMax: 70 },
  green: { hMin: 100, hMax: 160, sMin: 40, sMax: 100, lMin: 30, lMax: 70 },
  yellow: { hMin: 45, hMax: 65, sMin: 60, sMax: 100, lMin: 40, lMax: 80 },
  orange: { hMin: 20, hMax: 40, sMin: 60, sMax: 100, lMin: 40, lMax: 70 },
  red: { hMin: 0, hMax: 10, sMin: 60, sMax: 100, lMin: 40, lMax: 70 },

  light: { hMin: 0, hMax: 360, sMin: 20, sMax: 60, lMin: 70, lMax: 95 },
  dark: { hMin: 0, hMax: 360, sMin: 20, sMax: 80, lMin: 10, lMax: 30 },
};

export function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}
