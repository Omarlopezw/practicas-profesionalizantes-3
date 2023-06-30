import { Ticket } from './ticket.js';


function main() 
{
    let ticket = new Ticket();
    document.body.appendChild(ticket)
}

window.addEventListener('load',main)