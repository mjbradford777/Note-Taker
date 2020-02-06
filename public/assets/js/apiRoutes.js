const path = require('path');
const fs = require('fs');
const noteData = require('../../../db/db.json');
let location;

module.exports = function(app) {  
    app.get("/api/notes", function(req, res) {
      res.json(noteData);
    });

    app.post("/api/notes", function(req, res) {
      console.log(req.body);
      noteData.push(req.body);
      console.log(noteData);
      fs.writeFile('db.json', JSON.stringify(noteData), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      res.json(noteData);
    });
  };