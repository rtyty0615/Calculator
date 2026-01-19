
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
            }
        }
    });
});

// function operate(){
    
//     switch (b) {
//         case "divide":

//             alert('Too small');
//         case "mutiply":
//             alert('Exactly!');
//         case "subtract":
//             alert('Too big');
//         case "add":
//             alert('Too big');
//         default:
//             alert("I don't know such values");
//     }

// }
