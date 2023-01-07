const add = (x: number): any => {
  let sum = 0;

  const sumFunc = (a: number): any => {
    sum += a;

    Object.setPrototypeOf(sumFunc, {
      toString: function () {
        return sum;
      },
    });

    return sumFunc;
  };
  return sumFunc(x);
};
export default add;
