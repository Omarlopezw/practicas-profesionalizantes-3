import { CalculatorView } from './view/calculatorView.js'
import { CalculatorFrontendModel } from './model/CalculatorFrontendModel.js'
import { CalculatorController } from './controller/calculatorController.js'
import { cssCalculator } from './view/hardcodingStyle.js';


class HTMLCalculator  extends HTMLElement
{
    constructor( modelReference = CalculatorFrontendModel )
    {
        super();
        this.attachShadow({ mode: "open" });

        this.viewReference = new CalculatorView();
        this.modelReference = new modelReference();
        this.controllerReference = new CalculatorController( this.viewReference,this.modelReference )

		
		let style = document.createElement('style');
		style.innerText = cssCalculator();

        this.shadowRoot.appendChild(this.viewReference)
		this.shadowRoot.appendChild(style);
    }

    connectedCallback()
	{
		this.controllerReference.enable();
	}

	disconnectedCallback()
	{
		this.controllerReference.disable();
	}

	attributeChangedCallback( newValue, oldValue )
	{
        //Habilitar escritura de codigo html en mi web component
	}

	static get observedAttributes()
	{
		return []; //Habilitar escritura de codigo html en mi web component
	}
}

customElements.define('x-calculator', HTMLCalculator );

export { HTMLCalculator };

