export const validBraces = (braces: string): boolean => {
  const bracesPartners: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const closeOrder: string[] = [];
  for (const brace of braces) {
    if (brace in bracesPartners) {
      closeOrder.unshift(bracesPartners[brace]);
    } else {
      if (closeOrder[0] === brace) {
        closeOrder.shift();
      } else {
        return false;
      }
    }
  }
  return closeOrder.length === 0;
};
