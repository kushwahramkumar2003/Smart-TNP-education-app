export const strToArr = (str: string): string[] => {
  return str.split(", ").map((item) => item.trim());
};
