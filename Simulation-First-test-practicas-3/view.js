class View extends HTMLElement
{
    constructor()
    {
        super();
        //Conteiner
        this.conteiner = document.createElement('div');
        this.conteiner.classList.add('conteiner')

        //type
        this.typeOptions = document.createElement('select')
        this.tOption1 = document.createElement('option')
        this.tOption1.innerText = 'Error'

        this.tOption2 = document.createElement('option')
        this.tOption2.innerText = 'New requirement'
        
        this.labelType = document.createElement('label')
        this.labelType.innerText = 'Type'

        //Priority
        this.PriorityOptions = document.createElement('select')
        this.pOption1 = document.createElement('option')
        this.pOption1.innerText = 'Urgent'

        this.pOption2 = document.createElement('option')
        this.pOption2.innerText = 'Medium'

        this.pOption3 = document.createElement('option')
        this.pOption3.innerText = 'Low'

        this.labelPriority = document.createElement('label')
        this.labelPriority.innerText = 'Priority'

        //Description
        this.descriptionBox = document.createElement('textarea')
        this.descriptionBox.placeholder = 'Describe...'

        this.labelDescription = document.createElement('label')
        this.labelDescription.innerText = 'Description'

        //Button
        this.Button = document.createElement('button')
        this.Button.innerText = 'Send'

        //list of tickets
        this.listTickets = document.createElement('div');
        this.listTickets.classList.add('conteinerTickets')

        this.tableListTickets = document.createElement('table');

        this.row1 = document.createElement('tr');
        this.tableHearder1 = document.createElement('th');
        this.tableHearder1.innerText = 'Type'
        this.tableHearder2 = document.createElement('th');
        this.tableHearder2.innerText = 'Description'
        this.tableHearder3 = document.createElement('th');
        this.tableHearder3.innerText = 'Priority'

        //Add to DOM
        // this.megaConteiner = document.createElement('div');
        // this.appendChild(this.megaConteiner);
        this.appendChild(this.conteiner)
        this.conteiner.appendChild(this.labelType)
        this.conteiner.appendChild(this.typeOptions)
        this.typeOptions.appendChild(this.tOption1)
        this.typeOptions.appendChild(this.tOption2)

        this.conteiner.appendChild(this.labelPriority)
        this.conteiner.appendChild(this.PriorityOptions)
        this.PriorityOptions.appendChild(this.pOption1)
        this.PriorityOptions.appendChild(this.pOption2)
        this.PriorityOptions.appendChild(this.pOption3)

        this.conteiner.appendChild(this.labelDescription)
        this.conteiner.appendChild(this.descriptionBox)

        this.conteiner.appendChild(this.Button)

        this.conteiner.appendChild(this.listTickets)
        this.listTickets.appendChild(this.tableListTickets)

        //table
        this.tableListTickets.appendChild(this.row1)
        this.row1.appendChild(this.tableHearder1)
        this.row1.appendChild(this.tableHearder2)
        this.row1.appendChild(this.tableHearder3)
    }
}

customElements.define('x-view', View);
export { View }