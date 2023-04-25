let display = document.querySelector(".display");
let keypadButtons = document.getElementsByClassName("keypad-buttons");

let keypadButtonsArray = Array.from(keypadButtons);

keypadButtonsArray.forEach(button => 
{
    button.addEventListener('click',()=>
    {
        calculate(button,display);
    })
});

let calculate = (button, display)=>
{
    switch (button.innerHTML) 
    {
        case 'Borrar':
            deleteDisplay(display);
            break;
        case '=':
            evalInput(display);
            
            break;
    
        default:
            updateDisplay(display,button);
            break;
    }
}

let deleteDisplay = (display)=>
{
    display.innerHTML = 0;
}

let evalInput = (display)=>
{
    showResult(display,eval(display.innerHTML));
}

let showResult = (display,result)=>
{
    return display.innerHTML = result;
}
let updateDisplay = (display,button)=>
{
    if(display.innerHTML == 0) display.innerHTML = '';
    
    display.innerHTML += button.innerHTML
}