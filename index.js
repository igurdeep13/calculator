// let string = "";
// let calButtons = document.querySelectorAll(".button");
// Array.from(calButtons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       document.querySelector("h4").innerHTML = string;
//     } else if (e.target.innerHTML == "C"){
//         string = "";
//         document.querySelector("h4").innerHTML = string;
//     } 
//     else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.querySelector("h4").innerHTML = string;
//     }
//   });
// });


let string = ''
let calButtons = document.querySelectorAll(".button");

calButtons.forEach((button)=>{
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("h4").innerHTML = string;
        } else if (e.target.innerHTML == 'C'){
            string = ""
            document.querySelector("h4").innerHTML = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("h4").innerHTML = string;
        }
    });
});
