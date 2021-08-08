describe('test all the todos using the API', () => {

  // Add
  // Get
  // Update
  // Delete

  let id;

  it("should add a todo", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/todos",
      body: {
        "name": "todo 1",
        "isComplete": false
      }
    }).then(response => {
      id = response.body.id;
      expect(response.status).to.be.eq(201)
      expect(response.body.name).to.be.eql("todo 1")
    })
  })

  it("should get a spcific todo", () => {
    cy.request({
      method: "GET",
      url: `http://localhost:8080/todos/${id}`,
    }).then(response => {
      expect(response.status).to.be.eq(200)
      expect(response.body.name).to.eq("todo 1")
    })
  })

  it("should update a todo", () => {
    cy.request({
      method: "PUT",
      url: `http://localhost:8080/todos/${id}`,
      body: {
        "name": "todo 1",
        "isComplete": true
      }
    }).then(response => {
      expect(response.body.isComplete).to.be.eq(true)
    })
  })

  it("should delete a todo", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:8080/todos/${id}`
    }).then(response => {
      expect(response.status).to.be.eq(200)
    })
  })

});
