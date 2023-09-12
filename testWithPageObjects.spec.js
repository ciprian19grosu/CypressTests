import { onDatepickerPage } from "../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    beforeEach('Open Aplication', () => {
        cy.openHomePage()
    })

    it('verify navigation across the pages', () => {
        
        navigateTo.formLayoutsPage()
        //cy.wait(500)
        navigateTo.datepickerPage()
        //cy.wait(500)
        navigateTo.toastrPage()
        //cy.wait(500)
        navigateTo.smartTablePage()
        //cy.wait(500)        
        navigateTo.tooltipPage()
        //cy.wait(500)
    })

    it.only('should submit Inline and Basic form and select the tomorrow date in the calendar', () => {

        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Cip', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(1, 40)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Cip', 'Grosu')
        onSmartTablePage.deleteRowByIndex(3)
        onSmartTablePage.updateAgeByFirstName('Cip', 40)
    })


})
