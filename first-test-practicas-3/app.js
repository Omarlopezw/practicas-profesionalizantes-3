import { TelephoneContact } from './TelephoneContact.js';


function main() 
{
    let telephoneContact = new TelephoneContact();
    document.body.appendChild(telephoneContact)
}

window.addEventListener('load',main)