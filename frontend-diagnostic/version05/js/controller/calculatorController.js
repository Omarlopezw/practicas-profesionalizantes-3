

class CalculatorController
{
    constructor(view,model)
    {
        this.View = view;
        this.Model = model;
        // this.enable();
    }
    enable()
    {
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

    disable()
    {
        //Events
        this.View.button7.removeEventListener('click',()=>{this.onButtonClick7()})
        this.View.button8.removeEventListener('click',()=>{this.onButtonClick8()})
        this.View.button9.removeEventListener('click',()=>{this.onButtonClick9()})
        this.View.buttonAdd.removeEventListener('click',()=>{this.onButtonClickadd()})
        this.View.button4.removeEventListener('click',()=>{this.onButtonClick4()})
        this.View.button5.removeEventListener('click',()=>{this.onButtonClick5()})
        this.View.button6.removeEventListener('click',()=>{this.onButtonClick6()})
        this.View.buttonSubs.removeEventListener('click',()=>{this.onButtonClickSubs()})
        this.View.button3.removeEventListener('click',()=>{this.onButtonClick3()})
        this.View.button2.removeEventListener('click',()=>{this.onButtonClick2()})
        this.View.button1.removeEventListener('click',()=>{this.onButtonClick1()})
        this.View.buttonMultiplication.removeEventListener('click',()=>{this.onButtonClickMulti()})
        this.View.button0.removeEventListener('click',()=>{this.onButtonClick0()})
        this.View.buttonDot.removeEventListener('click',()=>{this.onButtonClickDot()})
        this.View.buttonEqual.removeEventListener('click',()=>{this.onButtonClickEqual()})
        this.View.buttonDivison.removeEventListener('click',()=>{this.onButtonClickDiv()})
        this.View.buttonDelete.removeEventListener('click',()=>{this.onButtonClickDelete()})
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
        this.Model.evalInput(this.View.display.innerHTML).then( response =>
        {
            this.View.display.innerHTML = response.message;
        });
    }

}

export { CalculatorController }