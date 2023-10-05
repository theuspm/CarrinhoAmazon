describe('Carrinho Amazon', () => {
    before(() => {
    cy.viewport(1280, 720)
    //Acessa página inicial do e-commerce Amazon
    cy.visit('https://amazon.com.br')
  })

    it('Adicionar um produto ao carrinho', () => {
    
    cy.get('#twotabsearchtextbox').type("Alexa")
    cy.get('#nav-search-submit-button').click()
    cy.get('#search').contains('Echo com Alexa').click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    cy.get('#sc-subtotal-label-activecart').should('contain','Subtotal (1 produto):') //verifica se o foi adicionado um produto
    
      //Altera quantidade de produtos
    cy.visit('https://www.amazon.com.br/cart?ref_=sw_gtc')
    cy.get('.a-dropdown-container').click()
    cy.get('#quantity_2').click()
    cy.get('#sc-subtotal-label-activecart').should('contain','Subtotal (2 produtos):')
    

      //Exclui produto
  cy.visit('https://www.amazon.com.br/cart?ref_=sw_gtc')
  cy.get('.a-dropdown-container').click()
  cy.get('#quantity_0').click()
  cy.get('#sc-subtotal-label-activecart').should('contain','Subtotal (0 produtos):')

  })

})