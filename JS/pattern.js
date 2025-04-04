
//                 1   10
//             1   2   9   10
//         1   2   3   8   9   10
//     1   2   3   4   7   8   9   10
// 1   2   3   4   5   6   7   8   9   10

function generatePattern(arr) {
    const n = arr.length;  
    for (let i = 1; i <= n / 2; i++) {
       let front=arr.slice(0,i).join(' ');
       let back=arr.slice(n-i,n).join(' ');
       let indent='  '.repeat(n-i);
       console.log(indent,front,back);
       

        
    }
  }
  
  const ab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  generatePattern(ab);
  
