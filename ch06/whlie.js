let i = 0;

// whlie (조건식) { 실행할 코드}
while (i <= 4) {
   if (i == 2) {
         i++;
    continue;
   }

    console.log(i);
    i++; // 증가
}
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 4);

//반복문에 레이블을 설덩하여
// 원하는 지점에서 continue/break하는 것이 가능하다
labelName: while (true) {
    while (true) {
        continue labelName;
        break labelName;
    }
}
