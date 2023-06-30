import { View } from './view.js';
import { Controller } from './controller.js';
import { Model } from './model.js';
import { cssTicket } from './cssTicket.js';

class Ticket extends HTMLElement
{
    constructor()
    {
        super();

        this.attachShadow({ mode: "open" });

        this.ticketView = new View();
        this.ticketModel = new Model();
        this.ticketController = new Controller(this.ticketView,this.ticketModel);

		let style = document.createElement('style');
		style.innerText = cssTicket();

        this.shadowRoot.appendChild(this.ticketView)
        this.shadowRoot.appendChild(style)

    }
}

customElements.define('x-ticket', Ticket);

export { Ticket }