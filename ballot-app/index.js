const express = require('express');
const app = express();
app.use(express.static('src'));
app.use(express.static('../ballot-contract/build/constracts'));
app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});
