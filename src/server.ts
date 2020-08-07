import express from "express";
import bodyParser from "body-parser";
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.use(bodyParser)
app.get("/okta", (req, res, next) => {
    res.json({ "verification" : req.headers["x-okta-verification-challenge"] });
});
app.post("/okta", (req, res, next) => {
    console.dir(req.body);
    res.render('blah.jade');
    res.end();
});