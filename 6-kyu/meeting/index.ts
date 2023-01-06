export const meeting = (s: string): string => {
  return (
    '(' +
    s
      .toUpperCase()
      .split(';')
      .map((i) => i.split(':'))
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1].localeCompare(b[1]);
        }
        return a[0].localeCompare(b[0]);
      })
      .map((i) => i.reverse().join(', '))
      .join(')(') +
    ')'
  );
};
