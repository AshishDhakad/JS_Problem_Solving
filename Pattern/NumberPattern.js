
let n = 5
palindromic_pyramid(n)

// palindromic pyramid
function palindromic_pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let num = 1;
        let st = ""
        for (let j = 1; j <= n - i; j++) {
            st += " "
        }
        for (let k = 1; k <= i; k++) {
            st += num
            num += 1
        }
        num -= 1
        for (let l = num - 1; l >= 1; l--) {
            num -= 1
            st += num
        }
        console.log(st)
    }
}