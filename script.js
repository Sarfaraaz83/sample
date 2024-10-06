const button = document.getElementById("btn");
const secondmess = "Click on it to see magic";
const firstmess = "I am clicked";
button.addEventListener("click",function(){
    if(button.textContent === firstmess){
        button.textContent = secondmess;
    }
    else{
        button.textContent = firstmess;
    }
});