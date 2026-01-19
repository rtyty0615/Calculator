
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
            } else if (btn.id === "equals") {
                operate(a,b,c)
            }

        }
    });
});

function operate(a,b,c){
    
    switch (b) {
        case "divide":
            sum = a / c;
            alert(sum);
            break;
        case "mutiply":
            sum = a * c;
            alert(sum);
            break;
        case "subtract":
            sum = a - c;
            alert(sum);
            break;
        case "add":
            sum = a + c;
            alert(sum);
            break;
        default:
            alert("");
    }

}
