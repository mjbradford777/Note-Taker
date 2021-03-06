const path = require('path');
const fs = require('fs');
const noteData = require('../../../db/db.json');

module.exports = function(app) { 
    // GET method for retrieving existing notes 
    app.get("/api/notes", function(req, res) {
      res.json(noteData);
    });

    // POST method for adding new notes
    app.post("/api/notes", function(req, res) {
      console.log(req.body);
      console.log(noteData.length);
      req.body.id = noteData.length;
      noteData.push(req.body);
      console.log(noteData);
      fs.writeFile('../../../db/db.json', JSON.stringify(noteData), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      res.json(noteData);
    });

    // DELETE method for removing unneeded notes
    app.delete(`/api/notes/:id`, function(req, res) {
      let id = req.params.id;
      noteData.splice(id, 1);
      fs.writeFile('../../../db/db.json', JSON.stringify(noteData), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      for (let i = 0; i < noteData.length; i++) {
        noteData[i].id = i;
      }
      fs.writeFile('../../../db/db.json', JSON.stringify(noteData), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
      res.json(noteData);
    });
  };