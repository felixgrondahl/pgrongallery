export const Clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
}