import { View } from './view.js';
import { Controller } from './controller.js';
import { Model } from './model.js';
import { cssTelephoneContact } from './cssTelephoneContact.js';

class TelephoneContact extends HTMLElement
{
    constructor()
    {
        super();

        this.attachShadow({ mode: "open" });

        this.TelephoneContactView = new View();
        this.TelephoneContactModel = new Model();
        this.TelephoneContactController = new Controller(this.TelephoneContactView,this.TelephoneContactModel);

		let style = document.createElement('style');
		style.innerText = cssTelephoneContact();

        this.shadowRoot.appendChild(this.TelephoneContactView)
        this.shadowRoot.appendChild(style)

    }
}

customElements.define('x-telephone-contact', TelephoneContact);

export { TelephoneContact }