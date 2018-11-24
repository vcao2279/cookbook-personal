// This file start the server. Also all logic for authentication, billing, etc... stay here
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jkwsClient = require("jwks-rsa");
const createServer = require("./createServer");

const server = createServer();

const client = jkwsClient({
  jwksUri: `https://lambda-cookbook.auth0.com/.well-known/jwks.json`
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  issuer: `https://lambda-cookbook.auth0.com/`,
  algorithms: ["RS256"]
};

server.express.use(async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("server token: ", token);
  // var decoded = jwt.decode(token, { complete: true });
  if (token) {
    try {
      await jwt.verify(token, getKey, options, (error, decoded) => {
        const { email, sub } = decoded;
        req.email = email;
        req.auth0sub = sub;
        next();
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    next();
  }
});

server.start(
  () => console.log("GraphQL server is running on http://localhost:4000")
  //need to add CORS
);
