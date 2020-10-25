var express = require("express");
var router = express.Router();
var fs = require("fs");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post("/", function (req, res, next) {
  var username = "dani";
  var password = "test";
  if (username == req.body.username && password == req.body.password) {
    fs.readFile("./email-list.json", (err, data) => {
      if (err) throw err;
      var mails = JSON.parse(data);
      var list = "";
      for (var i = 0; i < mails.length; i++) {
        console.log(mails[i]);

        list += "<p style='text-align: center;'>" + mails[i].userEmail + "</p>";
      }
      res.send(
        "<h2 style='text-align: center;'>These are all the mails you have: </h2>" +
          list +
          "<br><form action='/'><button type='submit'>HOME</button></form>"
      );
    });
  } else {
    res.send(
      "<h1>Fuck YOu</h1><br><form action='/'><button type='submit'>HOME</button></form>"
    );
  }
});

module.exports = router;
