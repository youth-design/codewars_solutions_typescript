import { orderWeight } from './index';

describe('orderWeight', () => {
  interface TestCase {
    value: string;
    expect: string;
  }

  const testCases: TestCase[] = [
    {
      value: '103 123 4444 99 2000',
      expect: '2000 103 123 4444 99',
    },
    {
      value: '2000 10003 1234000 44444444 9999 11 11 22 123',
      expect: '11 11 2000 10003 22 123 1234000 44444444 9999',
    },
  ];

  for (const testCase of testCases) {
    it(`should return "${testCase.expect}" for input "${testCase.value}"`, () => {
      expect(orderWeight(testCase.value)).toBe(testCase.expect);
    });
  }
});
