// 등차 수열
// 요구조건, 1(start)부터 2씩 5번 반복되는 연속하는 값이 동일한 수열을 구하시오

const start = 3;
const t = 2;
const repeatNum = 5;

const recursive = (start, t, repeatNum) => {
  let res = 0;
  for (let i = 1; i <= repeatNum; i++) {
    res = i === 1 ? res + start : res + t;
    // console.log(i, res);
  }
  return res;
};

console.log(recursive(start, t, repeatNum));
