const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    "/api/v1/auth/login": "/user",
    "/api/v1/nodes/": "/servers",
    "/api/v1/nodes/:parent_id/clients": "/cameras?parent_id=:parent_id",
    "/api/v1/nodes/:parent_id/clients/:id": "/cameras?parent_id=:parent_id,id=:id"
  }))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})