
let sum = 0;
let a = "";
let b = "";
let c = "";

const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (a === ""){
            if (btn.classList.contains("number")) {
                a = btn.textContent;
                console.log(a, b, c);}
        } else if (b === "") {
            if (btn.classList.contains("number")) {
                a+= btn.textContent;
                console.log(a, b, c);
            } else if (btn.classList.contains("operator")) {
                b = btn.id;
                console.log(a, b, c);
            } 
        } else if (c === "") {
            if (btn.classList.contains("number")) {
                c = btn.textContent;
                console.log(a, b, c);
            } else if (btn.classList.contains("operator")) {
                b = btn.id;
                console.log(a, b, c);
            } 
        } else if (a !== "" && b !== "" && c !== "" ) {
            if (btn.classList.contains("number")) {
                c += btn.textContent;
                console.log(a, b, c);
                console.log(a, b, c, sum);
            } else if (btn.id === "equals") {
                operate(a,b,c)
                console.log(a, b, c, sum);
            } else if (btn.classList.contains("operator")){
                operate(a, b, c);
                console.log(a, b, c, sum);
                b = btn.id;
                a = sum;
                c = "";
                console.log(a, b, c, sum);
            }
        }
    });
});

function operate(a,b,c){
    
    switch (b) {
        case "divide":
            sum = a / c;
            sum = Math.round(sum * 10000) / 10000;
            return sum;
        case "mutiply":
            sum = a * c;
            sum = Math.round(sum * 10000) / 10000;
            return sum;
        case "subtract":
            sum = a - c;
            sum = Math.round(sum * 10000) / 10000;
            return sum;
        case "add":
            sum = +a + +c;
            sum = Math.round(sum * 10000) / 10000;
            return sum;
        default:
            alert("");
    }

}
