const calculateWeight = (str: string): number => {
  return str.split('').reduce((acc, char) => acc + parseInt(char, 10), 0);
};
export const orderWeight = (str: string): string => {
  return str
    .split(' ')
    .sort((a, b) => {
      const diff = calculateWeight(a) - calculateWeight(b);
      if (diff === 0) {
        return a.localeCompare(b);
      }
      return diff;
    })
    .join(' ');
};
