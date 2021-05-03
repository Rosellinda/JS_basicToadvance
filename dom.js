// console.log(window);
// const Form = document.getElementById("myForm");
// const Form2 = document.querySelector("#myForm");
// console.log(Form2);

// const Inputs = document.querySelectorAll(".form-element");
// console.log(Inputs);

// Inputs.forEach(function(input){
//     console.log(input);
// })

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "FCC";
// ul.children[1].innerText = "Hello!";
// ul.lastElementChild.innerHTML = "<h1>Big</h1>";

// const btn = document.querySelector("#btn");
// btn.style.background = "red";

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("Button was clicked!");
// });

const Form = document.querySelector(".login-container");
btn.addEventListener("click", function(e){
    e.preventDefault();
    Form.style.background = "black;"
});

const UserName = document.querySelector("#username");
const Password = document.querySelector("#password");
const Msg = document.querySelector("#msg");

btn.addEventListener("click", function(e){
    e.preventDefault();

    if(UserName.nodeValue.length === 0 || Password.nodeValue.length === 0){
        console.log("False");
        Msg.innerHTML = "<h4 class='error'>Please complete details</h4>";

        setTimeout(() => document.querySelector(".error").remove(),3000);

    }else{
        console.log("True");
        Form.submit();
    }

});

