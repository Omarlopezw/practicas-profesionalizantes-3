import { createContactData } from './contactData.js';

class Controller
{
    constructor(referenceView,referenceModel)
    {
        
        this.referenceView = referenceView;
        this.referenceModel = referenceModel;
        this.referenceView.creationButton.addEventListener('click',()=>{this.createContact()})
        this.referenceView.deleteButton.addEventListener('click',()=>{this.deleteContact()})
        this.referenceView.updateButton.addEventListener('click',()=>{this.updateContact()})
        this.referenceView.readButton.addEventListener('click',()=>{this.readContact()})

        this.ContactsStorage = localStorage.getItem("contacts") ? 
        JSON.parse(localStorage.getItem("contacts")) : [];

        this.loadContact()
    }
    createContact()
    {
        let text = "Do you want to send it?";

        if (confirm(text) == true) 
        {
           //call model
            let contactData = createContactData();
            contactData.category = this.referenceView.categoryOptions.value;
            contactData.name = this.referenceView.contactName.value;
            contactData.surname = this.referenceView.contactSurname.value;
            contactData.telephone = this.referenceView.contactTelephone.value;

            let response = this.referenceModel.createContact(contactData);

            if(response === '')
            {

            }
            else
            {
                this.referenceView.tableListContacts.appendChild(response);

                this.saveContact(contactData);
            }
                
        } 
        else 
        {
            alert('nop')
        }
    }
    deleteContact()
    {
        let contact = this.referenceView.delContact.value;
        this.referenceModel.deleteContact(contact)
        this.updateTableView()
    }
    updateTableView()
    {
        // Vaciar las filas de la tabla
        while (this.referenceView.tableListContacts.rows.length > 1) 
        {
            this.referenceView.tableListContacts.deleteRow(this.referenceView.tableListContacts.rows.length - 1);
        }

        let listContacts = this.referenceModel.getContacts();
        this.referenceModel.resetContacts();

        listContacts.forEach( (contact) =>
        {
            let updatedContact = this.referenceModel.createContact(contact);
            this.referenceView.tableListContacts.appendChild(updatedContact);
        })
        // console.log(listContacts)
    }
    saveContact(contactData)
    {
        let contact = contactData.category + "-" + contactData.name + "-" + contactData.surname + "-" + contactData.telephone;
        this.ContactsStorage.push(contact);
        localStorage.setItem("contacts", JSON.stringify(this.ContactsStorage));
    }
    loadContact()
    {        
        this.ContactsStorage.forEach(( contact ) => 
        {
            /*Agarra la cadena,la divide por la bandera "-" y vuelve a cargar 
            cada fila almacenada en localstorage en la vista*/
            let contactData = createContactData();
            let arrContact = contact.split( "-");
            contactData.category = arrContact[0];
            contactData.name = arrContact[1];
            contactData.surname = arrContact[2];
            contactData.telephone = arrContact[3];

            let recoveredContact = this.referenceModel.createContact(contactData);
            this.referenceView.tableListContacts.appendChild(recoveredContact);

        });
    }
    updateContact()
    {
        let column = this.referenceView.updContactColumn.value;
        let value = this.referenceView.updContactColumnValue.value;
        let telephone = this.referenceView.updContactTelephone.value;

        this.referenceModel.updateContact(column,value,telephone);
        this.updateTableView();
    }
    readContact()
    {        
        let telephone = this.referenceView.readContactTelephone.value;

        let contact = this.referenceModel.readContact(telephone);

        let contactData =contact.category + ' ' + contact.name + ' ' + contact.surname + ' ' + '\n';
        this.referenceView.rContactInformation.innerText = contactData;
    }
}

export { Controller }