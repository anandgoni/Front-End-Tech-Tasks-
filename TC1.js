/// <reference types="Cypress" />

describe('Verify absence record with Mandatory Fields', function() 
{

it('Verify absence record with Mandatory Fields',function() {

//Verify header of the table with response fields
//Verify Respose and  Table record on UI

cy.visit("https://front-end-kata.brighthr.workers.dev/api/absences");
 
    cy.intercept({
        method : 'GET',
        url : 'https://front-end-kata.brighthr.workers.dev/api/absences"'
    },
 
     {
         statusCode : 200,
     })

}  )
}  )