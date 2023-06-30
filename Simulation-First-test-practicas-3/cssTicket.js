let cssTicket = () =>
{
    return `*
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .conteiner
    {
        width: 100%;
        height: 100%;
        margin: 20px;
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
        margin: 10px;
    }
    Button
    {
        font-size: 20px;
        padding: 5px;
        margin: 15px;
        background-color: rgb(23, 206, 78);
    }
    th
    {
        font-size:25px;
        border: 1px solid black;
    }

    td
    {
        border: 1px solid #808080;
        text-align: center;
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