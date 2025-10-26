import { twoSum } from "./two-sum";

describe('suit tests for twoSum function!', () => {
  test('Should find indices of two numbers that add up to the target', () => {

    const nums = [2, 4, 3, 7];
    const target = 9;
    const result = twoSum(nums, target);

    expect(result).toEqual([0, 3]);

  });
  
});