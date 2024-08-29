const correct1 = document.getElementById("correct1");
const correct2 = document.getElementById("correct2");
const correct3 = document.getElementById("correct3");
let score = 0;
const mySubmit = document.getElementById("submit1");
const mySubmit1 = document.getElementById("submit2");
const mySubmit2 = document.getElementById("submit3");
let result = document.getElementById("result");
let endbtn= document.getElementById("end");
let submit = document.querySelectorAll('.submit');
let names = document.getElementById("name");
let questions=3;

mySubmit.onclick = function(){

    if(correct1.checked){
    score++;
    }
}
mySubmit1.onclick = function(){

    if(correct2.checked){
    score++;
    }
}
mySubmit2.onclick = function(){

    if(correct3.checked){
    score++;
    }
}
submit.forEach(submit => {
    submit.addEventListener('click', () => {
        submit.classList.add('clicked');
        submit.textContent = "Submitted";
    })
})
endbtn.onclick = function(){
    if(score==questions){
        result.textContent = (score+"/"+questions+" "+ "Amazing! You know your friend very well!");
    }
    else if(score>0){
        result.textContent = (score+"/"+questions+" "+ "Know your friend better :<");
    }
    else{
        result.textContent = (score+"/"+questions+" "+ "Cheii! Mark ah ithu...Peh");
    }
    
}
