class View
{
    constructor()
    {
        this.conteiner = document.createElement('div');

        document.body.classList.add('conteiner');

        this.calculator = document.createElement('div');

        this.calculator.classList.add('calculator');

        this.display = document.createElement('div');

        this.display.classList.add('display');

        this.keyboard = document.createElement('div');

        this.keyboard.classList.add('keyboard');

        this.keypadnumbers = document.createElement('div');

        this.keypadnumbers.classList.add('keypad-numbers');

        //buttons
        this.button7 = document.createElement('div');

        this.button7.classList.add('keypad-buttons');

        this.button7.innerText = 7;

        this.button7.id = 'siete';
        // keypadnumbers.appendChild(button7)
        this.button8 = document.createElement('div');

        this.button8.classList.add('keypad-buttons');

        this.button8.innerText = 8;

        this.button8.id = 'ocho';

        this.button9 = document.createElement('div');

        this.button9.classList.add('keypad-buttons');

        this.button9.innerText = 9;

        this.button9.id = 'nueve';

        this.buttonAdd = document.createElement('div');

        this.buttonAdd.classList.add('keypad-buttons');
        this.buttonAdd.classList.add('green');

        this.buttonAdd.innerText = '+';

        this.buttonAdd.id = 'add';

        this.button4 = document.createElement('div');

        this.button4.classList.add('keypad-buttons');

        this.button4.innerText = 4;

        this.button4.id = 'cuatro';

        this.button5 = document.createElement('div');

        this.button5.classList.add('keypad-buttons');

        this.button5.innerText = 5;

        this.button5.id = 'cinco';

        this.button6 = document.createElement('div');

        this.button6.classList.add('keypad-buttons');

        this.button6.innerText = 6;

        this.button6.id = 'seis';

        this.buttonSubs = document.createElement('div');

        this.buttonSubs.classList.add('keypad-buttons');
        this.buttonSubs.classList.add('green');

        this.buttonSubs.innerText = '-';

        this.buttonSubs.id = 'subs';

        this.button3 = document.createElement('div');

        this.button3.classList.add('keypad-buttons');

        this.button3.innerText = 3;

        this.button3.id = 'tres';

        this.button2 = document.createElement('div');

        this.button2.classList.add('keypad-buttons');

        this.button2.innerText = 2;

        this.button2.id = 'dos';

        this.button1 = document.createElement('div');

        this.button1.classList.add('keypad-buttons');

        this.button1.innerText = 1;

        this.button1.id = 'uno';

        this.buttonMultiplication = document.createElement('div');

        this.buttonMultiplication.classList.add('keypad-buttons');
        this.buttonMultiplication.classList.add('green');

        this.buttonMultiplication.innerText = '*';

        this.buttonMultiplication.id = 'multiplication';

        this.button0 = document.createElement('div');

        this.button0.classList.add('keypad-buttons');

        this.button0.innerText = 0;

        this.button0.id = 'cero';

        this.buttonDot = document.createElement('div');

        this.buttonDot.classList.add('keypad-buttons');

        this.buttonDot.innerText = '.';

        this.buttonDot.id = 'punto';

        this.buttonEqual = document.createElement('div');

        this.buttonEqual.classList.add('keypad-buttons');
        this.buttonEqual.classList.add('yellow');

        this.buttonEqual.innerText = '=';

        this.buttonEqual.id = 'equal';

        this.buttonDivison = document.createElement('div');

        this.buttonDivison.classList.add('keypad-buttons');
        this.buttonDivison.classList.add('green');

        this.buttonDivison.innerText = '/';

        this.buttonDivison.id = 'divition';

        this.buttonDelete = document.createElement('div');

        this.buttonDelete.classList.add('keypad-buttons');
        this.buttonDelete.classList.add('large');

        this.buttonDelete.innerText = 'Borrar';

//         //Body
        this.megaConteiner = document.createElement('div');
        this.megaConteiner.appendChild(this.conteiner);
        this.conteiner.appendChild(this.calculator);
        this.calculator.appendChild(this.display);
        this.calculator.appendChild(this.keyboard);
        this.keyboard.appendChild(this.keypadnumbers);
        this.keypadnumbers.appendChild(this.button7);
        this.keypadnumbers.appendChild(this.button8);
        this.keypadnumbers.appendChild(this.button9);
        this.keypadnumbers.appendChild(this.buttonAdd);
        this.keypadnumbers.appendChild(this.button4);
        this.keypadnumbers.appendChild(this.button5);
        this.keypadnumbers.appendChild(this.button6);
        this.keypadnumbers.appendChild(this.buttonSubs);
        this.keypadnumbers.appendChild(this.button3);
        this.keypadnumbers.appendChild(this.button2);
        this.keypadnumbers.appendChild(this.button1);
        this.keypadnumbers.appendChild(this.buttonMultiplication);
        this.keypadnumbers.appendChild(this.button0);
        this.keypadnumbers.appendChild(this.buttonDot);
        this.keypadnumbers.appendChild(this.buttonEqual);
        this.keypadnumbers.appendChild(this.buttonDivison);
        this.keypadnumbers.appendChild(this.buttonDelete);
    }
}   

class Controller
{
    constructor(view,model)
    {
        this.View = view
        this.Model = model
        //Events
        this.View.button7.addEventListener('click',()=>{this.onButtonClick7()})
        this.View.button8.addEventListener('click',()=>{this.onButtonClick8()})
        this.View.button9.addEventListener('click',()=>{this.onButtonClick9()})
        this.View.buttonAdd.addEventListener('click',()=>{this.onButtonClickadd()})
        this.View.button4.addEventListener('click',()=>{this.onButtonClick4()})
        this.View.button5.addEventListener('click',()=>{this.onButtonClick5()})
        this.View.button6.addEventListener('click',()=>{this.onButtonClick6()})
        this.View.buttonSubs.addEventListener('click',()=>{this.onButtonClickSubs()})
        this.View.button3.addEventListener('click',()=>{this.onButtonClick3()})
        this.View.button2.addEventListener('click',()=>{this.onButtonClick2()})
        this.View.button1.addEventListener('click',()=>{this.onButtonClick1()})
        this.View.buttonMultiplication.addEventListener('click',()=>{this.onButtonClickMulti()})
        this.View.button0.addEventListener('click',()=>{this.onButtonClick0()})
        this.View.buttonDot.addEventListener('click',()=>{this.onButtonClickDot()})
        this.View.buttonEqual.addEventListener('click',()=>{this.onButtonClickEqual()})
        this.View.buttonDivison.addEventListener('click',()=>{this.onButtonClickDiv()})
        this.View.buttonDelete.addEventListener('click',()=>{this.onButtonClickDelete()})
    }

    //Buttons functions
    onButtonClick0 = ()=>
    {   
        this.View.display.innerHTML += '0';
    }
    onButtonClick1 = ()=>
    {   
        this.View.display.innerHTML += '1';
    }
    onButtonClick2 = ()=>
    {   
        this.View.display.innerHTML += '2';
    }
    onButtonClick3 = ()=>
    {   
        this.View.display.innerHTML += '3';
    }
    onButtonClick4 = ()=>
    {   
        this.View.display.innerHTML += '4';
    }
    onButtonClick5 = ()=>
    {   
        this.View.display.innerHTML += '5';
    }
    onButtonClick6 = ()=>
    {   
        this.View.display.innerHTML += '6';
    }
    onButtonClick7 = ()=>
    {   
        this.View.display.innerHTML += '7';
    }
    onButtonClick8 = ()=>
    {   
        this.View.display.innerHTML += '8';
    }
    onButtonClick9 = ()=>
    {   
        this.View.display.innerHTML += '9';
    }
    onButtonClickadd = ()=>
    {   
        this.View.display.innerHTML += '+';
    }
    onButtonClickSubs = ()=>
    {   
        this.View.display.innerHTML += '-';
    }
    onButtonClickMulti = ()=>
    {   
        this.View.display.innerHTML += '*';
    }
    onButtonClickDiv = ()=>
    {   
        this.View.display.innerHTML += '/';
    }
    onButtonClickDot = ()=>
    {   
        this.View.display.innerHTML += '.';
    }
    onButtonClickDelete = ()=>
    {   
        this.View.display.innerHTML = '';
    }
    onButtonClickEqual = ()=>
    {   
        this.View.display.innerHTML = this.Model.evalInput(this.View.display.innerHTML);
    }

}

class Model
{
    constructor()
    {

    }
    evalInput(input)
    {
        return eval(input);
    }
}

function startApplication() 
{
    let calculatorView = new View();
    let calculatorModel = new Model();
    let calculatorController = new Controller(calculatorView,calculatorModel);
    document.body.appendChild(calculatorView.megaConteiner);
}
window.addEventListener('load',startApplication);