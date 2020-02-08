const path = require('path');

module.exports = function(app) { 
    // Adding path to index page 
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../../index.html"));
    });
  
    // Adding path to notetaking page
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../../notes.html"));
    });

    // Linking core js file
    app.get("/test.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../../test.js"));
      });


    // Linking css file
    app.get("/assets/css/styles.css", function(req, res) {
      res.sendFile(path.join(__dirname, "../css/styles.css"));
    });
  
    // Setting default path
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../../index.html"));
    });
  };