// let n = 6;
// let half = Math.floor(n / 2);

// upper(half);
// if (n % 2 !== 0) {
//     middle(half + 1);
// }
// lower(half);

// function upper(half) {
//     for (let i = 1; i <= half; i++) {
//         let line = "";

//         // Left stars
//         line += "*".repeat(i);

//         // Spaces
//         let spaces = half * 2 - i * 2;
//         line += " ".repeat(spaces);

//         // Right stars
//         line += "*".repeat(i);

//         console.log(line);
//     }
// }

// function middle(rowCount) {
//     let totalStars = rowCount * 2 - 1;
//     console.log("*".repeat(totalStars));
// }

// function lower(half) {
//     for (let i = half; i >= 1; i--) {
//         let line = "";

//         // Left stars
//         line += "*".repeat(i);

//         // Spaces
//         let spaces = (half - i) * 2 + 1;
//         line += " ".repeat(spaces);

//         // Right stars
//         line += "*".repeat(i);

//         console.log(line);
//     }
// }

// let n=7;
// // *--""
// // 2--3
// // 4--1
// // 5--0
// // 4--1
// // 2--3

// upper(n/2)
// if(n%2!=0) middle(n/2+1);
// lower(n)

// function lower(n) {
//     for (let i = 1; i<=(n-1)/2; i++) {
//         let st = ""
//         let str =((n-1)/2)-i+1;
//         for (let j = 1; j <= str; j++) {
//             st += "*"
//         }
//         let sp = i* 2 - 1;
//         for (let k = 1; k < sp - 1; k++) {
//             st += " "
//         }
//         for (let l = 1; l <= str; l++) {
//             st += "*"
//         }

//         console.log(st)
//     }

// }
// function middle(n) {
//     let st = ""
//     for (let i = 1; i < n * 2 - 1; i++) {
//         st += "*"
//     }
//     console.log(st)
// }
// function upper(n) {
//     for (let i = 1; i <= n; i++) {
//         let st = ""
//         for (let j = 1; j <= i; j++) {
//             st += "*"
//         }
//         let sp = n * 2 - i * 2
//         for (let k = 1; k <= sp; k++) {
//             st += " "
//         }

//         for (let m = 1; m <= i; m++) {
//             st += "*"
//         }
//         console.log(st)
//     }
// } 

