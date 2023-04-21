import selectors from '../support/selectors'

describe('Search', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts?search=*', {
      body: [
        {
          id: '2',
          name: 'Jane Doe',
          email: 'jane.doe@foobar.com',
          avatar: 'https://i.pravatar.cc/200',
          birthday: '2022-06-30T19:16:41.824Z',
          phone: '555444333',
          createdAt: 'Thu, 20 Apr 2023 18:30:45 GMT',
        },
      ],
    }).as('getContact')

    cy.visit('http://localhost:3000')
    cy.wait('@getContact')
  })

  it('Displays a search bar', () => {
    cy.get(selectors.contactSearch).should('be.visible')
  })

  it('Accepts any input', () => {
    cy.get(selectors.contactSearch).type('qwerty')
  })

  it('Filters results', () => {
    cy.get(selectors.contactSearch).type('Jane')
    cy.get(selectors.contactsGrid).find(selectors.contactCard).should('have.length', 1)
    cy.contains('Jane Doe')
  })

  it('Shows a "No results" banner', () => {
    cy.intercept('GET', 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts?search=*', {
      body: [],
    }).as('getContact')

    cy.visit('http://localhost:3000')
    cy.wait('@getContact')
    cy.get(selectors.contactSearch).type('random')
    cy.get(selectors.contactsGrid).find(selectors.contactCard).should('have.length', 0)
    cy.get(selectors.noResultsBanner).should('be.visible')
  })
})
