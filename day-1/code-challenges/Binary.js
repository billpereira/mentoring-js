// NEW recursive function
function getGaps (BinaryArray, gaps) {
     const firstOne = BinaryArray.indexOf("1");
     if (firstOne > -1) {
          let NewBinaryArray = BinaryArray.slice(firstOne + 1);
          const secondOne = NewBinaryArray.indexOf("1");
          if (secondOne > 0) {
               gaps.push(secondOne);
          }
          return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
     }
     return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
function solution (N) {
     if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
          const Binary = N.toString(2).split('');
          return getGaps(Binary, []);
     }
     return 0;
}


console.log(solution(20));
console.log(solution(1041));
console.log(solution(32));