export const generateID = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  const i = () => Math.floor(Math.random() * chars.length);
  return `${chars[i()]}${chars[i()]}${chars[i()]}${chars[i()]}`;
};
