function solution(my_string, letter) {
    let answer = "";
    
    for(let i = 0; i < my_string.length; i++) {
       if(my_string[i] != letter) {
        answer += my_string[i]
        // 이 문잘를 삭제
       }
    }
    
    return answer;
}

console.log(solution("abcdf", "f"));