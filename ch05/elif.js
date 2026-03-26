const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question("점수를 입력하세요", function(score) {
    console.log(score);
    // 조건 1. 점수가 90점이상, 100점이상 이하인 경우 "장학대상"
    // 조건 2. 점수가 60점이상, 90점이상 미만인 경우 "합격"
    // 조건 3. 점수가 0점이상, 60점이상 미만인 경우 "불합격"
   // 예외처리. 점수가 0점 미만, 100점 초과인 경우 "값이 우호하지 않습니다"


   if (90 <= score && 100 > score) {
         console.log("장학대상") // result 도 console.log 이런거임 
   }
   else if (60 <= score && 90>  score){
         console.log("합격")
   }

   else if (0 <= score && 60 > score){
         console.log("불합격")
   }
   else{
     console.log("값이 유효하지 않습니다")
   }
    rl.close();
});