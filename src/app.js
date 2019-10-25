const path = require('path');
var express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080);