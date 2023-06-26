class CalculatorBackendModel
{
    async evalInput( mathInput )
    {
        let fetchData = 
        { 
            method: 'POST', 
            body: JSON.stringify( mathInput ) 
        }

        let request = await fetch( 'http://localhost:3000',fetchData );
        let response = await request.json();

        return response;
    }
}

export { CalculatorBackendModel }