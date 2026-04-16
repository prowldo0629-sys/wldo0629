const arr = [1, 7, -2, 21, 18, 12];

let max = -100000;
// 반복문을 이용해서 배열 순회
for(let i = 0; i < arr.length; i++) {
    // 현재 보고 있는 원소가 max 값보다 크면 max 갱신
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max); 

arr[arr.indexOf(21)] = -999999;
max = -100000;
for(let i = 0; i < arr.length; i++) {
    // 현재 보고 있는 원소가 max 값보다 크면 max 갱신
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max); 

// compare function (a, b)
// 양수 -> b룰 a보다 앞으로 정렬
// 0 -> 아무 작업 x
// 음수 -> a를 b보다 앞으로 정렬
arr.sort((a, b) => b -a);
console.log(arr);

number.sort((a, b) => b -a);
return number[0] * number[1];