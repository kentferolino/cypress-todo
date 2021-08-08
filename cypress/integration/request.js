/// <reference types="Cypress" />

// describe('Request command suite', () => {

  // it('Get request', () => {

  //   cy.visit('http://localhost:3000')

  //   cy.request({
  //     method: "GET",
  //     url: "http://localhost:8080/todos",
  //   }).then(response => {
  //     expect(response.body[0].isComplete).to.be.false
  //     expect(response.status).to.be.eq(200)
  //   })

  //   // cy.request("GET", "http://localhost:8080/todos").then(response => {
  //     // expect(response.status).to.be.eq(200)
  //     // expect(response.duration).to.be.below(20000)
  //     // expect(response.body[0].isComplete).to.be.false
  //   // })

  //   //?name=value
  // })

  // it('POST request', () => {
  //   cy.request("POST", "http://localhost:8080/todos", {
  //     "name": "test2",
  //     "isComplete": false
  //   }).then(response => {
  //     expect(response.status).to.be.eq(201)
  //   })

  // })

  // it('PUT request', () => {
  //   cy.request("PUT", "http://localhost:8080/todos/1894", {
  //     name: "asd",
  //     isComplete: true
  //   }).then(response => {
  //     expect(response.status).to.be.eq(200)
  //   })
  // })

  // it('DELETE request', () => {
  //   cy.request("DELETE", "http://localhost:8080/todos/7574").then(response => {
  //     expect(response.status).to.be.eq(200)
  //   })
  // })

  // it.only("secured api", () => {
  //   cy.request({
  //     method:"GET",
  //     url: "http://localhost:8080/courses",
  //     headers: {
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRAbWFpbC5jb20iLCJpYXQiOjE2MjgxNzMxMTMsImV4cCI6MTYyODE3NjcxMywic3ViIjoiNSJ9.L13G0Pl-VUBBK0iqvEWPkeET2aIE6Xm8zQ6yy9kAs8M"
  //     }
  //     // auth: {
  //     //   bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRAbWFpbC5jb20iLCJpYXQiOjE2MjgxNzMxMTMsImV4cCI6MTYyODE3NjcxMywic3ViIjoiNSJ9.L13G0Pl-VUBBK0iqvEWPkeET2aIE6Xm8zQ6yy9kAs8M"
  //     // }
  //   })
  // })
// })