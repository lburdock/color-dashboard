const hexChars = "0123456789ABCDEF";

export const getRandomHex = () => {
  const colorArray = Array.from(
    { length: 6 },
    () => hexChars[Math.floor(Math.random() * 16)]
  );
  return "#" + colorArray.join("").toLowerCase();
};
