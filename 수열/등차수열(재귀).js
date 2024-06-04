// 등차 수열
// 요구조건, 1(start)부터 2씩 5번 반복되는 연속하는 값이 동일한 수열을 구하시오

// start(시작)에 다가가기 위해 5번 반복을 어떻게 시킬것이냐. 빠저나올 조건

const start = 3;
const t = 2;
const repeatNum = 5;

const recursive = (start, t, repeatNum) => {
  if (repeatNum === 1) return start;

  return recursive(start, t, repeatNum - 1) + t;
};

console.log(recursive(start, t, repeatNum));
