import { cleanString } from './index';

describe('clearString', () => {
  interface TestCase {
    value: string;
    expect: string;
  }

  const testCases: TestCase[] = [
    {
      value: 'abc#d##c',
      expect: 'ac',
    },
    {
      value: 'abc####d##c#',
      expect: '',
    },
  ];

  for (const testCase of testCases) {
    it(`should return "${testCase.expect}" for input "${testCase.value}"`, () => {
      expect(cleanString(testCase.value)).toBe(testCase.expect);
    });
  }
});
