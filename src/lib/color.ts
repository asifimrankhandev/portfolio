export type Rgb = { r: number; g: number; b: number };

/** Resolves an element's computed CSS `color` (e.g. set via a `text-accent` class) to RGB channels. */
export const readElementColor = (element: Element): Rgb => {
  const [r = 0, g = 0, b = 0] = (getComputedStyle(element).color.match(/[\d.]+/g) ?? []).map(Number);
  return { r, g, b };
};

export const rgba = ({ r, g, b }: Rgb, alpha: number) => `rgba(${r}, ${g}, ${b}, ${alpha})`;
