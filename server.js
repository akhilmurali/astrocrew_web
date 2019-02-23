const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key:
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});

const app = express();

const checkRole = (requiredRole)=>{
 let roles = ['user', 'pro', 'moderator', 'admin'];                                         
 return function (req, res, next) {
    let assignedRole = req.user["http://localhost:3000/roles"][0];
    if(roles.indexOf(assignedRole) >= roles.indexOf(requiredRole)){ 
      return next();
    }else{
      return res.status(401).json({msg: 'Insufficient Role', status: 'Err'});
    }
  }
}

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from a public API!"
  });
});

app.get("/private", checkJwt, function(req, res) {
  res.json({
    user: req.user,
    message: "Hello from a private API!"
  });
});

app.get("/admin", checkJwt, checkRole("admin"), function(req, res){
  res.json({
    user: req.user,
    message: "Hello from a admin endpoint!"
  });
}); 


app.get("/moderator", checkJwt, checkRole("moderator"), function(req, res){
  res.json({
    user: req.user,
    message: "Hello from a moderator endpoint!"
  });
}); 

app.get("/pro", checkJwt, checkRole("pro"), function(req, res){
  res.json({
    user: req.user,
    message: "Hello from a pro endpoint!"
  });
}); 

app.post("/edit/role", checkJwt, checkRole("pro"), function(req, res){
   
}); 

app.listen(3001);
console.log("API server listening on " + 3001);
