// This file start the server. Also all logic for authentication, billing, etc... stay here
require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();

server.express.use((req, res, next) => {
  console.log(req.headers);
  next();
});

server.start(
  () => console.log("GraphQL server is running on http://localhost:4000")
  //need to add CORS
);
