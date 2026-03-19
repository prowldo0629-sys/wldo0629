let num = 10; // Number
num = -1;
num = 3.14

let str = "문자열"; // String
let str2 = '문자열' + num ; // String
let str3 = '문자열 ${num}'; // String

let bool = true; // Booleam
let bool2 = false; // Booleam

let n = null; // Null 값이없다는 뜻
let u = undefined; // Undefined 권장 ㄴㄴ

//let a; // 이렇게도 쓸수 있음
//let a = null // 개발자가 고의로 여기를 비워났다는 설정
console.log(a);

let a = {
    key: "value",
    key2: "value2",
}; // 어브젝트

// a = {}; // Error
a.key = "modified value";
console.log(a);

let arr = [1, 2, 3]; // 배열
arr[0] = 3 // arr = 배열? 줄임말
// arr = []// Error