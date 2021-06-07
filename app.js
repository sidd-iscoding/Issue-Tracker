const express = require('express'); //import the 'espress' module

const app = express();              //creates a new express application for you; multiple apps can be created this way which listens on different ports
app.use(express.static('static'));

app.listen(3000, function () {      //listen takes a port no. & start  the server while waiting on the port no.
  console.log('App is started on  port 3000');
});
