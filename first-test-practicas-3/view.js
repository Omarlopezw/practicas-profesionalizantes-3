class View extends HTMLElement
{
    constructor()
    {
        super();
        //Conteiner
        this.conteiner = document.createElement('div');
        this.conteiner.classList.add('conteiner')

        //create contact Data
                
        this.labelcontactName = document.createElement('label')
        this.labelcontactName.innerText = 'Contact name'

        this.contactName = document.createElement('input');
        this.contactName.type = 'text';
        this.contactName.placeholder = 'contact name...';

        this.labelcontactSurname = document.createElement('label')
        this.labelcontactSurname.innerText = 'Contact surname'

        this.contactSurname = document.createElement('input');
        this.contactSurname.type = 'text';
        this.contactSurname.placeholder = 'contact surname...';

        this.labelcontactTelephone = document.createElement('label')
        this.labelcontactTelephone.innerText = 'Contact Telephone'

        this.contactTelephone = document.createElement('input');
        this.contactTelephone.type = 'text';
        this.contactTelephone.placeholder = 'contact Telephone...';

        //Category
        this.labelCategory = document.createElement('label')
        this.labelCategory.innerText = 'Category'

        this.categoryOptions = document.createElement('select')
        this.cOption1 = document.createElement('option')
        this.cOption1.innerText = 'Friends'

        this.cOption2 = document.createElement('option')
        this.cOption2.innerText = 'Work'

        this.cOption3 = document.createElement('option')
        this.cOption3.innerText = 'Study'

        this.cOption4 = document.createElement('option')
        this.cOption4.innerText = 'Family'

        this.cOption5 = document.createElement('option')
        this.cOption5.innerText = 'Favorites'

        this.cOption6 = document.createElement('option')
        this.cOption6.innerText = 'Services'

        //creation Button
        this.creationButton = document.createElement('button')
        this.creationButton.innerText = 'Send contact data'

         //delete contact Data
        this.labelDeleteContact = document.createElement('label')
        this.labelDeleteContact.innerText = 'Delete contact'

        this.delContact = document.createElement('input');
        this.delContact.type = 'text';
        this.delContact.placeholder = 'contact telephone to delete...';

        //delete Button
        this.deleteButton = document.createElement('button')
        this.deleteButton.innerText = 'Delete contact data'

         //update contact Data
        this.labelUpdateColumn = document.createElement('label')
        this.labelUpdateColumn.innerText = 'Column'

        this.updContactColumn = document.createElement('input');
        this.updContactColumn.type = 'text';
        this.updContactColumn.placeholder = 'Columna to update...';

        this.labelUpdateColumnValue = document.createElement('label')
        this.labelUpdateColumnValue.innerText = 'Value'

        this.updContactColumnValue = document.createElement('input');
        this.updContactColumnValue.type = 'text';
        this.updContactColumnValue.placeholder = 'value...';

        this.labelUpdateContactTelephone = document.createElement('label')
        this.labelUpdateContactTelephone.innerText = 'Contact telephone'

        this.updContactTelephone = document.createElement('input');
        this.updContactTelephone.type = 'text';
        this.updContactTelephone.placeholder = 'contact telephone...';

        //update Button
        this.updateButton = document.createElement('button')
        this.updateButton.innerText = 'Update contact data'

        //read Data

        this.labelReadContact = document.createElement('label')
        this.labelReadContact.innerText = 'Contact Telephone'

        this.readContactTelephone = document.createElement('input');
        this.readContactTelephone.type = 'text';
        this.readContactTelephone.placeholder = 'Contact telephone...';

        this.rContactInformation = document.createElement('p');

         //read Button
        this.readButton = document.createElement('button')
        this.readButton.innerText = 'Read contact data'

        //list of tickets
        this.listContacts = document.createElement('div');
        this.listContacts.classList.add('conteinerTickets')

        this.tableListContacts = document.createElement('table');

        this.row1 = document.createElement('tr');
        this.tableHearder1 = document.createElement('th');
        this.tableHearder1.innerText = 'Category'
        this.tableHearder2 = document.createElement('th');
        this.tableHearder2.innerText = 'Contact name'
        this.tableHearder3 = document.createElement('th');
        this.tableHearder3.innerText = 'Contact surname'
        this.tableHearder4 = document.createElement('th');
        this.tableHearder4.innerText = 'Contact telephone'

        //Add at DOM for create
        this.appendChild(this.conteiner)
        this.conteiner.appendChild(this.labelcontactName)
        this.conteiner.appendChild(this.contactName)
        this.conteiner.appendChild(this.labelcontactSurname)
        this.conteiner.appendChild(this.contactSurname)
        this.conteiner.appendChild(this.labelcontactTelephone)
        this.conteiner.appendChild(this.contactTelephone)
        this.conteiner.appendChild(this.labelCategory)
        this.conteiner.appendChild(this.categoryOptions)
        this.categoryOptions.appendChild(this.cOption1)
        this.categoryOptions.appendChild(this.cOption2)
        this.categoryOptions.appendChild(this.cOption3)
        this.categoryOptions.appendChild(this.cOption4)
        this.categoryOptions.appendChild(this.cOption5)
        this.categoryOptions.appendChild(this.cOption6)
        this.conteiner.appendChild(this.creationButton)

        //Add at DOM for delete
        this.conteiner.appendChild(this.labelDeleteContact)
        this.conteiner.appendChild(this.delContact)
        this.conteiner.appendChild(this.deleteButton)

        //Add at DOM for update
        this.conteiner.appendChild(this.labelUpdateColumn)
        this.conteiner.appendChild(this.updContactColumn)
        this.conteiner.appendChild(this.labelUpdateColumnValue)
        this.conteiner.appendChild(this.updContactColumnValue)
        this.conteiner.appendChild(this.labelUpdateContactTelephone)
        this.conteiner.appendChild(this.updContactTelephone)
        this.conteiner.appendChild(this.updateButton)

        //Add at DOM for read
        this.conteiner.appendChild(this.labelReadContact)
        this.conteiner.appendChild(this.readContactTelephone)
        this.conteiner.appendChild(this.readButton)
        this.conteiner.appendChild(this.rContactInformation)


        this.conteiner.appendChild(this.listContacts)
        this.listContacts.appendChild(this.tableListContacts)

        //table
        this.tableListContacts.appendChild(this.row1)
        this.row1.appendChild(this.tableHearder1)
        this.row1.appendChild(this.tableHearder2)
        this.row1.appendChild(this.tableHearder3)
        this.row1.appendChild(this.tableHearder4)
    }
}

customElements.define('x-view', View);
export { View }