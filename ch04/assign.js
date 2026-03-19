let a = 10;
let b = 3;

console.log(a += b); // a = a + b, 13
console.log(a -= b); // a = a - b, 10
console.log(a *= b); // a = a * b, 30
console.log(a /= b); // a = a / b, 10
console.log(a %= b); // a = a % b, 1
console.log(a **= b); // a = a ** b, 1

// 증가 연신자(전위(앞에 붙은거) / 후위 (뒤에 붙은거))
// ++, --가 앞에 븥으나 뒤에 붙으나
// a = a + 1 or a = a - 1 연산은 동일하다.
// 앞에 붙은 경우 전위 연산으로 우선 수행
// 뒤에 붙은 경우 후위 연산으로 우선순위가 낮다.
console.log(a++); // a = a + 1  //1 출력후 계산
console.log(++a); // a = a + 1  // 3 계산후 츨력

// 감소 연산자
console.log(a--); // a = a - 1  // 3
console.log(--a); // a = a - 1  // 1
