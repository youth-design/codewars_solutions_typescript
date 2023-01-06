export const cleanString = (s: string): string => {
  let backspacesCount = 0;
  return s
    .split('')
    .reverse()
    .filter((i) => {
      if (i === '#') {
        backspacesCount += 1;
        return false;
      } else {
        if (backspacesCount !== 0) {
          backspacesCount -= 1;
          return false;
        }
        return true;
      }
    })
    .reverse()
    .join('');
};
