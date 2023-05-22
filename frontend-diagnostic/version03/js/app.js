function startApplication() 
{

    class View
    {
        constructor()
        {
            this.conteiner = document.createElement('div');

            this.conteiner.classList.add('conteiner');

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

            //Body
            this.megaConteiner = document.createElement('div');
            this.megaConteiner.appendChild(conteiner);
            this.megaConteiner.appendChild(calculator);
            this.megaConteiner.appendChild(display);
            this.megaConteiner.appendChild(keyboard);
            this.megaConteiner.appendChild(keypadnumbers);
            this.megaConteiner.appendChild(button7);
            this.megaConteiner.appendChild(button8);
            this.megaConteiner.appendChild(button9);
            this.megaConteiner.appendChild(buttonAdd);
            this.megaConteiner.appendChild(button4);
            this.megaConteiner.appendChild(button5);
            this.megaConteiner.appendChild(button6);
            this.megaConteiner.appendChild(buttonSubs);
            this.megaConteiner.appendChild(button3);
            this.megaConteiner.appendChild(button2);
            this.megaConteiner.appendChild(button1);
            this.megaConteiner.appendChild(buttonMultiplication);
            this.megaConteiner.appendChild(button0);
            this.megaConteiner.appendChild(buttonDot);
            this.megaConteiner.appendChild(buttonEqual);
            this.megaConteiner.appendChild(buttonDivison);
            this.megaConteiner.appendChild(buttonDelete);
        }

        
    }   

    class Controller
    {
        constructor()
        {

        }

        //Buttons functions
        onButtonClick0 = ()=>
        {   
            display.innerHTML += '0';
        }
        onButtonClick1 = ()=>
        {   
            display.innerHTML += '1';
        }
        onButtonClick2 = ()=>
        {   
            display.innerHTML += '2';
        }
        onButtonClick3 = ()=>
        {   
            display.innerHTML += '3';
        }
        onButtonClick4 = ()=>
        {   
            display.innerHTML += '4';
        }
        onButtonClick5 = ()=>
        {   
            display.innerHTML += '5';
        }
        onButtonClick6 = ()=>
        {   
            display.innerHTML += '6';
        }
        onButtonClick7 = ()=>
        {   
            display.innerHTML += '7';
        }
        onButtonClick8 = ()=>
        {   
            display.innerHTML += '8';
        }
        onButtonClick9 = ()=>
        {   
            display.innerHTML += '9';
        }
        onButtonClickadd = ()=>
        {   
            display.innerHTML += '+';
        }
        onButtonClickSubs = ()=>
        {   
            display.innerHTML += '-';
        }
        onButtonClickMulti = ()=>
        {   
            display.innerHTML += '*';
        }
        onButtonClickDiv = ()=>
        {   
            display.innerHTML += '/';
        }
        onButtonClickDot = ()=>
        {   
            display.innerHTML += '.';
        }
        onButtonClickDelete = ()=>
        {   
            display.innerHTML = '';
        }

    }

    let calculatorView = new View();
    document.body.appendChild(calculatorView.megaConteiner);

    let onButtonClickEqual = ()=>
    {   
        display.innerHTML = eval(display.innerHTML);
    }


    //Events
    button7.addEventListener('click',onButtonClick7)
    button8.addEventListener('click',onButtonClick8)
    button9.addEventListener('click',onButtonClick9)
    buttonAdd.addEventListener('click',onButtonClickadd)
    button4.addEventListener('click',onButtonClick4)
    button5.addEventListener('click',onButtonClick5)
    button6.addEventListener('click',onButtonClick6)
    buttonSubs.addEventListener('click',onButtonClickSubs)
    button3.addEventListener('click',onButtonClick3)
    button2.addEventListener('click',onButtonClick2)
    button1.addEventListener('click',onButtonClick1)
    buttonMultiplication.addEventListener('click',onButtonClickMulti)
    button0.addEventListener('click',onButtonClick0)
    buttonDot.addEventListener('click',onButtonClickDot)
    buttonEqual.addEventListener('click',onButtonClickEqual)
    buttonDivison.addEventListener('click',onButtonClickDiv)
    buttonDelete.addEventListener('click',onButtonClickDelete)

}
window.addEventListener('load',startApplication);