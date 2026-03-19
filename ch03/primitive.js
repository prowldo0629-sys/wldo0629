let a = 10;
let b = a;

a = 15;

// 원시 자료형일 경우, 변수, 복사 시,
// 복사 당시의 값만 복사된다.
console.log(a); // 기대값 15
console.log(b); // 기대값 10