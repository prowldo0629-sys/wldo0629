// 배열 자르기 문제
function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i <= num2; i++) {
        answer.push(numbers[i]);
    }

    return answer; 
}
// -------------------------------------------------------------------------------------------
// 배열 원소 삭제하기
function solution(arr, delete_list) {
    var answer = [];
    // 1. arr 배열 전체 탐색
    // 2. arr[l]원소가 delere_list 배열에 포함괴는지 체크
    // 2-1. 만약 포함되어있으면 삭제
    // 2-2. 포함되어 있지 않으면 생존
    // 3. 생존한 원소들을 순서대로 배치한 배열 반환
    for(let i = 0; i < arr.length; i++) {
        let flag = true; // arr[i]원소가 살아남았는가
        
       for(let j = 0; j < delete_list.length; j ++) {
         if (arr[i] === delete_list[j]) {
             flag = false;
         }
           
       }
        if (flag){
            // i번째 원소는 살아남았기 때문에, 결과 배열에 추가한다
            answer.push(arr[i])
        }
            
    }
    return answer;
    
}

//-----------------------------------------------------------------------------------------
// 두개 만들기
function solution(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
    }

    return result;
}


