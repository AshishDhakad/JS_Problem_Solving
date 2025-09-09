let n = 5;

// 1. Inverted Right-Angled Triangle
function Inverted_Right_Angled_Triangle(n) {
    for (let i = 0; i < n; i++) {
        let st = "";
        for (let j = 0; j < n - i; j++) {
            st += "*";
        }
        console.log(st);
    }
}

// 2. Right-Aligned Inverted Triangle
function Right_Aligned_Inverted_Triangle(n) {
    for (let i = 1; i <= n; i++) {
        let st = "";
        for (let j = 1; j < i; j++) {
            st += " ";
        }
        for (let k = 0; k <= n - i; k++) {
            st += "*";
        }
        console.log(st);
    }
}

// 3. Right-Angled Triangle
function Right_Angled_Triangle(n) {
    for (let i = 1; i <= n; i++) {
        let st = "";
        for (let j = 1; j <= i; j++) {
            st += "*";
        }
        console.log(st);
    }
}

// 4. Right-Aligned Triangle
function Right_Aligned_Triangle(n) {
    for (let i = 1; i <= n; i++) {
        let st = "";
        for (let j = 1; j <= n - i; j++) {
            st += " ";
        }
        for (let k = 1; k <= i; k++) {
            st += "*";
        }
        console.log(st);
    }
}

// 5. Pyramid Pattern
function Pyramid_Pattern(n) {
    for (let i = 1; i <= n; i++) {
        let st = "";
        for (let j = 1; j <= n - i; j++) {
            st += " ";
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            st += "*";
        }
        console.log(st);
    }
}

// 6. Square Pattern
function Square_Pattern(n) {
    for (let i = 1; i <= n; i++) {
        let st = ""
        for (let j = 1; j <= n; j++) {
            st += "*"
        }
        console.log(st)
    }
}


// 7. Diamond_Pattern
function Diamond_Pattern(n) {

    // upper Triangle
    for (let i = 1; i <= n; i++) {
        let st = ""
        for (let j = 1; j <= n - i; j++) {
            st += " "
        }
        for (let k = 1; k <= i; k++) {
            st += "*"
        }
        for (let l = 1; l < i; l++) {
            st += "*"
        }
        console.log(st)
    }
    //lower Triangle
    for (let i = 1; i <= n; i++) {
        let st = ""
        for (let m = 1; m <= i; m++) {
            st += " "
        }
        for (let j = 1; j < (n - i) * 2; j++) {
            st += "*"
        }
        console.log(st)
    }
}

// Calling the functions
console.log("Inverted Right-Angled Triangle");
Inverted_Right_Angled_Triangle(n);

console.log("\nRight-Aligned Inverted Triangle");
Right_Aligned_Inverted_Triangle(n);

console.log("\nRight-Angled Triangle");
Right_Angled_Triangle(n);

console.log("\nRight-Aligned Triangle");
Right_Aligned_Triangle(n);

console.log("\nPyramid Pattern");
Pyramid_Pattern(n);

console.log("\nSquare Pattern");
Square_Pattern(n);

console.log("\nDiamond Pattern");
Diamond_Pattern(n)