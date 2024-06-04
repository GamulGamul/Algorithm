/* 
    배열에 최소값 의 index를 배열로 반환하시오.
*/

const answer = (nums) => {
  let res = [];
  // 1. 최소값 구하기
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (min > num) min = num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (min === nums[i]) res = [...res, i];
  }
  return res;
  // 2. 최소값의 index 구하기
};
console.log(answer([5, 2, 10, 2]));
console.log(answer([4, 5, 7, 4, 8, 4, 5]));
