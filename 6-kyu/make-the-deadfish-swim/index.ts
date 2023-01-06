export const parse = (data: string): number[] => {
  const result: number[] = [];
  let calculated = 0;
  const commands = data.split('');

  for (const command of commands) {
    switch (command) {
      case 'i':
        calculated += 1;
        break;
      case 'd':
        calculated -= 1;
        break;
      case 's':
        calculated = Math.pow(calculated, 2);
        break;
      case 'o':
        result.push(calculated);
        break;
    }
  }
  return result;
};
