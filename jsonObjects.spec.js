/// <reference types="cypress" />

describe('JSON objects', () =>{

    it('JSON objects', () =>{
        cy.openHomePage()

        const simpleObject = { "key1": "value1", "key2": "value2"}

        const simpleArrayOfValues = [ "one", "two", "three"]

        const arrayOfObjects = [ {"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mixObject = {
            "FirstName": "Cip",
            "LastName": "Grosu",
            "Age": "40",
            "Students": [
                {
                    "FirstName": "Ion",
                    "LastName": "Vasile"
                },
                {
                    "FirstName": "Jan",
                    "LastName": "Vali"
                }
            ]
        }

        console.log(simpleObject.key1)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfValues[2])
        console.log(arrayOfObjects[2].key3)
        console.log(mixObject.Students[0].LastName)
    })
})