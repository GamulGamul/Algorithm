/* 
    두수를 더했을때 최대합이 나오는 배열을 반환하시오.

    1. 배열요소가 arr최대값보다 큰 경우: 배열 요소를 arr[0] 넣고 기존의 arr[0]은 arr[1]로 옴겨놓는다.
    2. arr최대값 두번쨰
*/
const answer = (nums) => {
  let result = [];

  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }
  return result;
};

console.log(answer([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]));
console.log(answer([3, 7, -14, 2, -6, 13, -20]));
// console.log([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]);
// console.log([3, 7, -14, 2, -6, 13, -20]);
