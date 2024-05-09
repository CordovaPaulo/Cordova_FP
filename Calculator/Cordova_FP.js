const displayEqui = document.getElementById("display1");
const displayAns = document.getElementById("display2");
let computeDone = false;
const ans = new String("");

//accepts input using the buttons
function AddToDisplay(input){
    if(computeDone === true){
        Clear();
        displayEqui.value += input;
        computeDone = false;
    }
    else{
        if(displayEqui.value.length + input.length <= displayEqui.maxLength){
            displayEqui.value += input;
        }
        else {
            let remLen = displayEqui.maxLength - displayEqui.value.length;
            displayEqui.value += input.slice(0, remLen);
        }
    }
}

//math function
function Compute(){
    try{
        displayAns.value = math.evaluate(displayEqui.value);
        computeDone = true;
    }
    catch(error){
        displayEqui.value = "Syntax Error";
        displayAns.value = "Error";
    }
    ans.value = displayAns.value;
    if(displayAns.value.length > displayAns.maxLength){
        displayAns.style.overflowX = 'auto';
    }
    else{
        displayAns.style.overflowX = 'hidden'
    }
}

//clears both display
function Clear(){
    displayEqui.value = "";
    displayAns.value = "";
}

//deletes the last number, sign, or letter input
function Del(){
    if(displayAns.value !== ""){
        Clear();
    }
    else{
        displayEqui.value = displayEqui.value.slice(0, -1);
    }
}

//displays the last answer
function answer(){
    if(ans.value === ""){
        displayEqui.value += 'Undefined';
    }
    else{
        if(displayAns.value !== ""){
            Clear();
            displayEqui.value += ans.value;
            computeDone = false;
        }
        else{
            displayEqui.value += ans.value;
            computeDone = false;
        }
    }
}

//performs del, clear, and compute function using keyboard inputs
document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key === 'Backspace'){
        Clear();
        event.preventDefault();
    }
    else if(event.key === "Backspace"){
        Del();
        event.preventDefault()  ;
    }
    if(event.key === 'Enter'){
        Compute();
        event.preventDefault();
    }
});

//accepts keyboard input and displays on screen
document.addEventListener('keypress', function(event){
    if(computeDone){
        Clear();
        if(event.key >= 0 && event.key <= 9){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '+'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '-'){
            if(displayEqui.value === ""){
                AddToDisplay('-(');
                event.preventDefault();
            }
            else{
                AddToDisplay(event.key);
                event.preventDefault();
            }
        }
        else if(event.key === '*' ||  event.key === 'x'){
            AddToDisplay('*');
            event.preventDefault();
        }
        else if(event.key === '/'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '.'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '!'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '%'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '('){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === ')'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === ';'){
            toggleSecFunc();    
            event.preventDefault();
        }
        else if(event.key === '`'){
            answer();    
            event.preventDefault();
        }
        else{
            AddToDisplay(event.key);
            event.preventDefault();
        }
    }
    else{
        if(event.key >= 0 && event.key <= 9){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '+'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '-'){
            if(displayEqui.value === ""){
                AddToDisplay('-(');
                event.preventDefault();
            }
            else{
                AddToDisplay(event.key);
                event.preventDefault();
            }
        }
        else if(event.key === '*' ||  event.key === 'x'){
            AddToDisplay('*');
            event.preventDefault();
        }
        else if(event.key === '/'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '.'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '!'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '%'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === '('){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === ')'){
            AddToDisplay(event.key);
            event.preventDefault();
        }
        else if(event.key === ';'){
            toggleSecFunc();    
            event.preventDefault();
        }
        else if(event.key === '`'){
            answer();    
            event.preventDefault();
        }
        else{
            AddToDisplay(event.key);
            event.preventDefault();
        }
    }
});

//toggles the second set of functions
let secOp = document.querySelector(".keysSet2");

function toggleSecFunc() {
    secOp.classList.toggle('active');
}
