// And(&&) 연산
console.log(true && true); // true
console.log(false && true); // fales
console.log(true && false); // false
console.log(false && false); // false

// Or(||) 연산

// Not(!) 연산
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Not(!) 연산
console.log(!true); // false
console.log(!false); // true

const age = 19;
// 학생의 나이인지 구분해보자
// 조건1. 8세 이상
// 조건2. 19세 이하
const result = age >= 8 && age <= 19 ? "학생이다": "학생이아니다";
console.log(result);

//Nullish 병합 연산자
// 좌항이 null 또는 undefined인 경우
// 우황의 값을 반환하고, 그렇지 않은 경우 좌황을 반황한다
let nickname = null;
console.log(nickname ?? "익명사용자");
nickname = undefined;
console.log(nickname ?? "익명사용자");
nickname = "문지애";
console.log(nickname ?? "익명사용자");