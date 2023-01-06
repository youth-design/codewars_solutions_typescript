import { parse } from './index';

describe('parse', () => {
  interface TestCase {
    value: string;
    expect: number[];
  }

  const testCases: TestCase[] = [
    {
      value: 'iiisdoso',
      expect: [8, 64],
    },
    {
      value: 'iiisxxxdoso',
      expect: [8, 64],
    },
  ];

  for (const testCase of testCases) {
    it(``, () => {
      expect(parse(testCase.value)).toEqual(testCase.expect);
    });
  }
});
