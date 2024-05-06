describe('HSBC Project', () => {
    beforeEach(() => {
        cy.visit('https://www.hsbc.co.in/security/')
    })
    it('CheckText', ()=>{
        cy.get('input[id="rememberMe"]').click()
        cy.get('input[id="username"]').type("User1234\t{enter}")
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').click()
        cy.get('span[class="icon icon-delete"]').click()
})
})