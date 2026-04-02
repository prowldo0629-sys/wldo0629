const arr = ["햄스터", "용", "원숭이", "티라노사우르스", "강아지"];

arr.push("고양이");
// 배열이 영어로  arrangement이거 때문에 변수 이름이 arr임

// 변수를 원소라고 부름
//배열.length = 배열 내 원소 개수
// 배열의 마지막 원소 인덱스 = 배열.length - 1
for(let i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
}