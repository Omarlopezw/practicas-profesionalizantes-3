
class CalculatorFrontendModel
{
    constructor()
    {

    }
    evalInput( input )
    {

        // let response =  Promise.resolve({message : eval( input )})
        let response =  new Promise( ( resolve ) => resolve({message : eval( input )}))
        return response;
    }
}

export { CalculatorFrontendModel }