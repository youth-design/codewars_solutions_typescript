import { validBraces } from './index';

describe('validBraces', () => {
  interface TestCase {
    value: string;
    expect: boolean;
  }

  const testCases: TestCase[] = [
    {
      value: '()',
      expect: true,
    },
    {
      value: '[(])',
      expect: false,
    },
    {
      value: '(((({{',
      expect: false,
    },
  ];

  for (const testCase of testCases) {
    it(`should return ${testCase.expect.toString()} for input ${testCase.value}`, () => {
      expect(validBraces(testCase.value)).toBe(testCase.expect);
    });
  }
});
