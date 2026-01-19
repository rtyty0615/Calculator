
let sum = 0;
let a = 0; 
let b = ""; 
let c = "";

const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "clear"){
            a = sum = 0;
            b = c = "";
            console.log(a, b, c, sum);
        } else if (b === "") {
            if (a === 0) {
                if (btn.classList.contains("number")) {
                    if (btn.id !== "zero") {
                        if (btn.id === "decimal") {
                            a += btn.textContent;
                            console.log(a, b, c);
                        }
                        else {
                            a = btn.textContent;
                            console.log(a, b, c);
                        }
                    }
                } else if (btn.classList.contains("operator")) {
                    b = btn.id;
                    console.log(a, b, c);
                }
            } else if (btn.classList.contains("number")) {
                // fixed zero
                if (btn.id === "decimal" && String(a).includes(".")) {
                    console.log(a, b, c);
                } else if (btn.id === "delete"){
                    a = a.slice(0,-1);
                    console.log(a, b, c);

                } else {
                    a+= btn.textContent;
                    console.log(a, b, c);
                }
            } else if (btn.classList.contains("operator")) {

                b = btn.id;
                console.log(a, b, c);
            } 
        } else if (c === "") {
            if (btn.classList.contains("number")) {
                if (btn.id === "decimal"){
                    c = 0;
                    c += btn.textContent;
                    console.log(a, b, c);
                } else if (btn.id === "delete") {
                    b = "";
                    console.log(a, b, c);

                } else {
                    c = btn.textContent;
                    console.log(a, b, c);
                }
            } else if (btn.classList.contains("operator")) {
                b = btn.id;
                console.log(a, b, c);
            } 
        } else if ( b !== "" && c !== "" ) {
            if (btn.classList.contains("number")) {
                if (btn.id === "decimal" && String(a).includes(".")){
                    console.log(a, b, c, sum);
                } else if ( c === "0") {
                    c = "";
                    c += btn.textContent;
                    console.log(a, b, c, sum);
                } else if (btn.id === "delete") {
                    c = c.slice(0, -1);
                    console.log(a, b, c);
                } else {
                    c += btn.textContent;
                    console.log(a, b, c, sum);
                }
            } else if (btn.id === "equals") {
                if (b === "divide" && c === "0"){
                    alert("You can't divide by 0!");
                } else{
                    operate(a,b,c);
                    console.log(a, b, c, sum);
                }
            } else if (btn.classList.contains("operator")){
                if (b === "divide" && c === "0") {
                    alert("You can't divide by 0!");
                } else {
                operate(a, b, c);
                console.log(a, b, c, sum);
                b = btn.id;
                a = sum;
                c = "";
                console.log(a, b, c, sum);
                }
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


