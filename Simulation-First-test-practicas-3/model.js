class Model
{
    constructor()
    {

    }
    createTicket(type,priority,description)
    {
        this.row = document.createElement('tr');
        this.td1 = document.createElement('td');
        this.td1.innerText = `${type}`
        this.td2 = document.createElement('td');
        this.td2.innerText =  `${description}`
        this.td3 = document.createElement('td');
        this.td3.innerText = `${priority}`

        if(priority == 'Urgent')
        {
            this.td3.classList.add('redCell');
        }
        else if(priority == 'Medium')
        {
            this.td3.classList.add('yellowCell');
        }
        else
        {
            this.td3.classList.add('greenCell');
        }
        this.row.appendChild(this.td1)
        this.row.appendChild(this.td2)
        this.row.appendChild(this.td3)

        return this.row;
    }
}


export { Model }