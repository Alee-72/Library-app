import { createServer, Model } from "miragejs"

import books from './json/books.json'

export function makeServer() {
  let server = createServer({
  

    routes() {
      this.namespace = "api"

      this.get("/books", () => {
        return books;
      })
      this.post("/add", (schema,req) => {
       console.log(req);
       const newBooks = JSON.parse(req.requestBody);
        books.push(newBooks) 

      })
    },
  })

  return server
}