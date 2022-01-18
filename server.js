const express = require('express'),
    https = require("https"),
    fs = require("fs");


const options = {
    key: fs.readFileSync("./keys/privkey.pem"),
    cert: fs.readFileSync("./keys/fullchain.pem")
};
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const port = 8443

https.createServer(options, app).listen(port, () => {
    console.log("App is running on port: ", port);
});