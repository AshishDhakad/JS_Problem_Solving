

const arr =[1,23,3,4,5,1,3,3,4,4,5,56,6,7,78,9]


//   first approach 
// const res = [...new Set(arr)];
// console.log(res);

// Second approach
const newRes = arr.filter((ele,idx)=>arr.indexOf(ele)===idx)
console.log(newRes);

