const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// db faker
const randomData = require('./random-data-db');

const PORT = 3000;
const Routes = {
  employees:'/api/employees',
  admins: 'api/admins'
};
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get(Routes.employees, (req, res) => {
  res.json(randomData())
});

server.get(Routes.admins, (req, res) => {
  res.json(randomData())
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
});

// Use default router
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}\n`);
  listRoutes(Routes);
  console.log('\n----------------\n')
});

function listRoutes(routes) {
  Object.entries(routes).forEach(([key, value]) => {
    console.log('Resources:\n');
    console.log(`${key}: http://localhost:${PORT}${value}`);
  });
}
