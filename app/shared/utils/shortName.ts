export const shortName = (text: string, len: number = 20): string => {
  if (!text) return '';

  return `${text?.slice(0, len)} ${text.length > len ? '...' : ''}`;
};
