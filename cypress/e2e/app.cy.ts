import selectors from '../support/selectors'

describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts?search=*', {
      fixture: 'contacts.json',
    }).as('getContacts')
  })

  it('Returns 200 on GET contacts', () => {
    cy.visit('http://localhost:3000')
    cy.wait('@getContacts').then((xhr) => {
      expect(xhr?.response?.statusCode).to.equal(200)
    })
  })

  it('Displays the grid of contacts', () => {
    cy.visit('http://localhost:3000')
    cy.wait('@getContacts')
    cy.get(selectors.contactsGrid).should('be.visible')
  })

  it('Displays a contact card for each contact', () => {
    cy.visit('http://localhost:3000')
    cy.wait('@getContacts')
    cy.get(selectors.contactsGrid).find(selectors.contactCard).should('have.length', 4)
  })

  it('Displays an error banner', () => {
    cy.intercept('GET', 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts?search=*', {
      statusCode: 500,
    }).as('getContactsError')
    cy.visit('http://localhost:3000')
    cy.wait('@getContactsError').then(() => {
      cy.get(selectors.errorBanner).should('be.visible')
    })
  })
})
