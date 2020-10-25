var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", function (req, res, next) {
  var html = "";
  html += "<body>";
  html += "<form action='../admin' method='post' name='form2'>";
  html +=
    "Username: <input required='required' type='text' name='username'><br/>";
  html +=
    "Password: <input required='required' type='password' name='password'><br/>";
  html += "<input type='submit' value='submit'><br/>";
  html += "</form>";
  html += "</body>";
  html += "<br><form action='/'><button type='submit'>HOME</button></form>";
  res.send(html);
});

module.exports = router;
