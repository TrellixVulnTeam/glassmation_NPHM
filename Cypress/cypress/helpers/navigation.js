export class Navigation {

    home() {
        cy.visit(Cypress.env('TESTING_BASE_URL'))
    }

    uitapDynamic() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'dynamicid')
    }

}