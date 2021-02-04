const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/Web'));

// app starts from index
app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/Web', 'index.html'))
});

/* Listen on port */
server.listen(port, function () {
    console.log("Server listening at port %d", port);
});