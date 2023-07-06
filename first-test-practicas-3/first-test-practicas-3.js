class FirstButtonStateModel
{
	constructor()
	{
		this.value = 0;
        this.ColorReferenceValue = 1;
	}

	increment()
	{
      if(this.value == 255)
        {
          this.value+=0;
        }
      else
        {
          this.value = this.value+1;
        }
      
	}

	read()
	{
		return this.value;
	}
}

class SecondButtonStateModel
{
	constructor()
	{
		this.value = 0;
        this.ColorReferenceValue = 2;
	}

	increment()
	{
      if(this.value == 254)
        {
          this.value+=1;
        }
      else if(this.value == 255)
        {
          this.value+=0;
        }
      else
        {
          this.value = this.value+2;
        }
      
	}

	read()
	{
		return this.value;
	}
}

class ButtonStateController
{
	constructor( model, view )
	{
		this.innerModel = model;
		this.innerView = view;
      
        this.ColorValue = 255;
	}

	init()
	{
		this.innerView.setValue( this.innerModel.read() );
	}

	onclick()
	{
        this.ColorValue = this.ColorValue - this.innerModel.ColorReferenceValue;
      
		this.innerModel.increment();
		this.innerView.setValue( this.innerModel.read() );
        this.innerView.customButton.style.backgroundColor = `rgb(${this.ColorValue}, 0, 0)`;
	}
}

class ButtonStateView extends HTMLElement
{
	constructor(modelReference)
	{
		super();

		this.innerModel = modelReference
		this.innerController = new ButtonStateController(this.innerModel, this);
		
		this.customButton = document.createElement('button');
        this.customButton.style.backgroundColor = "rgb(255, 0, 0)";

		this.appendChild(this.customButton);
	}

	connectedCallback()
	{
		this.customButton.onclick = ()=> this.innerController.onclick();
		this.innerController.init();
	}

	setValue( value )
	{
		this.customButton.innerText = value.toString();
	}
}

customElements.define('x-button', ButtonStateView );

function main()
{
    let firstModel = new FirstButtonStateModel();
    let secondModel = new SecondButtonStateModel();
	let testButton = new ButtonStateView(firstModel);
	document.body.appendChild(testButton);
}

window.onload = main;
