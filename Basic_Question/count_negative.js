
// count-negative

let arr = [1,0-4,2,8,5,-3,6,-7]
let count =0;

for(let i=0;i<arr.length;i++){
    if(arr[i]<0) count++;
}

console.log(count);
