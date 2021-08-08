/// <reference types="Cypress" />

describe('TODO UI Testing', () => {

  beforeEach(()=> {
    cy.visit('/')
  })

  it.only("should add a new todo correctly", () => {

    cy.intercept("POST", "http://localhost:8080/todos").as("postRequest")
    cy.addNewTodo("First Todo")
    cy.wait('@postRequest').then(xhr => {
      expect(xhr.request.body.name).to.eql("First Todo")
    })
    cy.get('.todo-item').last().should("contain.text", "First Todo")
  })

  it("should toggle a new todo correctly", () => {
    cy.addNewTodo("Second Todo")
    cy.get(".todo-checkbox").check().should('be.checked')
    cy.get(".todo-checkbox").uncheck().should('be.not.checked')
  })

  it("should delete a new todo correctly", () => {
    cy.addNewTodo("Third Todo")
    cy.get('.delete-item').click()
  })

  it("should not add an empty todo", () => {
    cy.addNewTodo("")
  })

  afterEach(() => {
    cy.get('body').then(element => {
      if(element.find(".delete-item").length> 0) {
        cy.get('.delete-item').click({multiple: true})
      }
    })
    // cy.get('.delete-item').each(item => {
    //   cy.wrap(item).click()
    // })
  })

})