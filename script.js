
// define sum as result, a as the first number, b as the operator, and c as the second number
let sum = 0;
let a = 0; 
let b = ""; 
let c = "";
const display = document.querySelector("#result");
const displaySmall = document.querySelector("#displaySmall");
display.textContent = a;


const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // clear everything on the display
        if (btn.id === "clear"){
            a = sum = 0;
            b = c = "";
            display.textContent = a;
            displaySmall.textContent = '\u00A0';
            console.log(a, b, c, sum);
        } else if (b === "") {
            // first number, a, will be assigned
            if (a === 0 && btn.id !== "delete") {
                if (btn.classList.contains("number")) {
                    if (btn.id !== "zero") {
                        if (btn.id === "decimal") {
                            a += btn.textContent;
                            display.textContent = a;
                            console.log(a, b, c);
                        }
                        else {
                            a = btn.textContent;
                            display.textContent = a;
                            console.log(a, b, c);
                        }
                    }
                } else if (btn.classList.contains("operator")) {
                    b = btn.textContent;
                    displaySmall.textContent = a + " " + b;
                    console.log(a, b, c);
                }
            // still first number, a
            } else if (btn.classList.contains("number")) {
                // fixed zero
                if (btn.id === "decimal" && String(a).includes(".")) {
                    display.textContent = a;
                    console.log(a, b, c);
                } else if (btn.id === "delete"){
                    a = String(a).slice(0,-1);
                    display.textContent = a;
                    console.log(a, b, c);

                } else {
                    a+= btn.textContent;
                    display.textContent = a;
                    console.log(a, b, c);
                }
            // move on to the operator, b
            } else if (btn.classList.contains("operator")) {
                b = btn.textContent;
                displaySmall.textContent = a + " " + b;
                console.log(a, b, c);
            } 
        // move on to second number, c
        } else if (c === "") {
            if (btn.classList.contains("number")) {
                if (btn.id === "decimal"){
                    c = 0;
                    c += btn.textContent;
                    display.textContent = c;
                    console.log(a, b, c);
                } 
                else if (btn.id === "delete" ) {
                    a = String(a).slice(0, -1);
                    display.textContent = a;
                    console.log(a, b, c);
                } 
                else {
                    c = btn.textContent;
                    display.textContent = c;
                    console.log(a, b, c);
                }
            // change operator, b
            } else if (btn.classList.contains("operator")) {
                b = btn.textContent;
                displaySmall.textContent = a + " " + b;
                console.log(a, b, c);
            } 
        // still second number, c
        } else if ( b !== "" && c !== "" ) {
            if (btn.classList.contains("number")) {
                // can't repeat .
                if (btn.id === "decimal" && String(a).includes(".")){
                    console.log(a, b, c, sum);
                } else if (btn.id === "delete") {
                    c = String(c).slice(0, -1);
                    display.textContent = c;
                    console.log(a, b, c);
                } else if ( c === "0") {
                    c = "";
                    c += btn.textContent;
                    display.textContent = c;
                    console.log(a, b, c, sum);
                } else {
                    c += btn.textContent;
                    display.textContent = c;
                    console.log(a, b, c, sum);
                }
            } else if (btn.id === "equals") {
                if (b === "÷" && c === "0"){
                    alert("You can't divide by 0!");
                    return;
                } else{
                    displaySmall.textContent = a + " " + b + " " + c;
                    operate(a,b,c);
                    a = sum;
                    b = "";
                    c = "";
                    display.textContent = a;
                    console.log(a, b, c, sum);
                }
            } else if (btn.classList.contains("operator")){
                if (b === "÷" && c === "0") {
                    alert("You can't divide by 0!");
                    return;
                } else {
                operate(a, b, c);
                console.log(a, b, c, sum);
                b = btn.textContent;
                a = sum;
                c = "";
                displaySmall.textContent = a + " " + b;
                display.textContent = a;
                console.log(a, b, c, sum);
                }
            }
        }
    });
});

function operate(a,b,c){
    switch (b) {
        case "÷":
            sum = a / c;
            sum = Math.round(sum * 1000) / 1000;
            return sum;
        case "×":
            sum = a * c;
            sum = Math.round(sum * 1000) / 1000;
            return sum;
        case "−":
            sum = a - c;
            sum = Math.round(sum * 1000) / 1000;
            return sum;
        case "+":
            sum = +a + +c;
            sum = Math.round(sum * 1000) / 1000;
            return sum;
        default:
            alert("");
    }

}


