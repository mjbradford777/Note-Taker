let PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./apiRoutes")(app);
require("./htmlRoutes")(app);
require("./apiRoutes")(app);


app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
  });