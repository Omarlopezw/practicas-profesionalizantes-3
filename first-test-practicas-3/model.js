class Model
{
    constructor()
    {
        this.listOfContacts = new Array();
    }
    createContact(contactData)
    {
        //Busca si hay algun contacto ya existente con dichos datos en el array
        let isActive =  this.listOfContacts.some((elemento) => JSON.stringify(elemento) === JSON.stringify(contactData));
        if(isActive)
        {
            alert('Contact already exits,equal data');
        }
        else if(contactData.name === '' || contactData.surname === '' || contactData.telephone === '')
        {
            alert('You must fill the fields');
            return '';
        }
        else
        {
            this.listOfContacts.push(contactData);
            this.row = document.createElement('tr');
            this.td1 = document.createElement('td');
            this.td1.innerText = `${contactData.category}`;
            this.td2 = document.createElement('td');
            this.td2.innerText =  `${contactData.name}`;
            this.td3 = document.createElement('td');
            this.td3.innerText = `${contactData.surname}`;
            this.td4 = document.createElement('td');
            this.td4.innerText = `${contactData.telephone}`;

            this.row.appendChild(this.td1)
            this.row.appendChild(this.td2)
            this.row.appendChild(this.td3)
            this.row.appendChild(this.td4)
        }
        
        
        if(contactData.category == 'Friends')
        {
            this.row.classList.add('redCell');
        }
        else if(contactData.category == 'Work')
        {
            this.row.classList.add('yellowCell');
        }
        else if(contactData.category == 'Study')
        {
            this.row.classList.add('greenCell');
        }
        else if(contactData.category == 'Family')
        {
            this.row.classList.add('blueCell');
        }
        else if(contactData.category == 'Favorites')
        {
            this.row.classList.add('violetCell');
        }
        else
        {
            this.row.classList.add('lightsalmonCell');
        }
        
        return this.row;
    }
    deleteContact(contactTelephone)
    {
        let index = this.listOfContacts.findIndex(contact => contact.telephone === contactTelephone);
        if(index == -1)
        {
            alert("Contact do not exist");
        }
        else
        {
            this.listOfContacts.splice(index, 1);
            console.log('user deleted '+this.listOfContacts)
        }
    }
    updateContact(column,value,telephone)
    {
        let index = this.listOfContacts.findIndex(contact => contact.telephone === telephone);
            if(index == -1)
            {
                alert("Contact do not exist,don't updated");
            }
            else
            {
                let contact = this.listOfContacts[index];
                contact[`${column}`] = `${value}`;
            }

    }
    readContact(contactTelephone)
    {
        let index = this.listOfContacts.findIndex(contact => contact.telephone === contactTelephone);

        return this.listOfContacts[index];
    }
    getContacts()
    {
        return this.listOfContacts;
    }
    resetContacts()
    {
        this.listOfContacts = [];
    }
}


export { Model }