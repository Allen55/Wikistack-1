const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json())


const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})