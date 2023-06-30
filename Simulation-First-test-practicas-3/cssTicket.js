let cssTicket = () =>
{
    return `body
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .conteiner
    {
        width: 100%;
        height: 100%;
        /* background-color: brown; */
        display: grid;
    }
    .ticketAdditionConteiner
    {
        margin: 100px;
        width: 300px;
        height: 150;
        /* background-color: rgb(115, 98, 145); */
        display: grid;
    }
    .conteinerTickets
    {
        
        margin: 100px;
        width: 60%;
        height: 150;
        /* background-color: rgb(115, 98, 145); */
        display: grid;
    }
    
    label
    {
        padding: 5px;
        margin: 15px;
    }
    
    .redCell
    {
        background-color: red;
        color: white;
    }
    
    .yellowCell
    {
        background-color: yellow;
        color: white;
    }
    
    .greenCell
    {
        background-color: greenyellow;
        color: white;
    }`
}

export { cssTicket }