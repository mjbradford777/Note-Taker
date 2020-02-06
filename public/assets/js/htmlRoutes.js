const path = require('path');

module.exports = function(app) {  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../../index.html"));
    });
  
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../../notes.html"));
    });

    app.get("/test.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../../test.js"));
      });

      app.get("/assets/css/styles.css", function(req, res) {
        res.sendFile(path.join(__dirname, "../css/styles.css"));
      });
  
    // app.get("*", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../../index.html"));
    // });
  };