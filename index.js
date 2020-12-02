const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT||3000
server.use(middlewares)
server.use(router)
server.get('/', (req, res) => {
    res.render('Dashboard.html')
})
server.listen(PORT, () => {
  console.log('JSON Server is running')
})