const { urlencoded } = require("express");
var express = require("express");
const app = require("../app");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var fs = require("fs");

router.get("/", function (req, res, next) {
  var html = "";
  html += "<body>";
  html += "<form action='/save-data' method='post' name='form1'>";
  html += "Name: <input required='required' type='text' name='email'><br/>";
  html += "<input type='submit' value='submit'><br/>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

router.post("/", urlencodedParser, function (req, res) {
  var reply = "";
  reply +=
    "<br/>Your email  " +
    req.body.email +
    " is saved <br><form action='/'><button type='submit'>HOME</button></form>";
  fs.readFile("./email-list.json", (err, data) => {
    if (err) throw err;
    var mails = JSON.parse(data);
    mails.push({ userEmail: req.body.email });
    var saveMails = JSON.stringify(mails, null, 2);
    fs.writeFile("./email-list.json", saveMails, (err, data) => {
      if (err) throw err;
    });
    res.send(reply);
  });
});

module.exports = router;
