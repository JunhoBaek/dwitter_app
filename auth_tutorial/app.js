const jwt = require("jsonwebtoken");

const secKey = "Lyf%a6tQQKEWh#v^f&98NmRt4XwTqgO$";

const token = jwt.sign(
  {
    userName: "ellie",
  },
  secKey,
  {
    expiresIn: 3,
  }
);

console.log(token);

setTimeout(() => {
  jwt.verify(token, secKey, (err, decoded) => {
    console.log(err, decoded);
  });
}, 5000);
