import express from "express";
import bodyParser from "body-parser";
var app = express();
var port = process.env.PORT || 8888;
console.log(process.env.PORT);
app.listen(port, () => {
    console.log("Server running on port " + port);
});
app.use(bodyParser)
app.get("/okta", (req, res, next) => {
    res.json({ "verification" : req.headers["x-okta-verification-challenge"] });
});

app.get("/", (req, res, next) => {
    res.json({ "hello" : "world"});
});

app.post("/okta", (req, res, next) => {
    console.dir(req.body);
    res.render('blah.jade');
    res.end();
});