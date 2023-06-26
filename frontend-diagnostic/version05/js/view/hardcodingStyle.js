let cssCalculator = () =>
{
    return `*
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .conteiner
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 15px;
    }
    .calculator
    {
        display: flex;
        flex-direction: column;
        width: 400px;
        border: 1px solid gray;
        font-size: 2rem;
        color: black;
    }
    .display
    {
        padding: 25px 15px;
        border: 1px solid gray;
        border-radius: 15px;
        margin-right: 5%;
        margin-left: 5%;
        text-align: right;
        width: 90%;
        overflow-x: auto;
    
    }
    .keyboard
    {
        display: flex;
        width: 100%;
    }
    .keypad-numbers
    {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    
    }
    .keypad-buttons:hover
    {
        filter: brightness(80%);
        transition: filter .25s;
    }
    .keypad-buttons
    {
        width: 17%;
        padding: 15px 0px;
        margin: 15px;
        text-align: center;
        cursor:pointer;
        background-color: rgb(26, 26, 248);
        color: white;
        border-radius: 20px;
        border: none;
         box-shadow:
           inset 0 -5em 3em rgba(0,0,0,0.1),
                 0 0  0 2px rgb(0, 4, 22),
                 0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
    .keypad-buttons.yellow
    {
        background-color: rgb(235, 144, 7);
    }
    .keypad-buttons.green
    {
        background-color: rgb(43, 243, 16);
    }
    .keypad-buttons.large
    {
        width: 100%;
        background-color: red;
        border-radius: 15px;
    }
    .keypad-buttons.dark
    {
        background-color: gray;
    }`
}

export { cssCalculator }