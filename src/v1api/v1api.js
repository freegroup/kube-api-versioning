var express = require("express");
var app = express();

var version = "v1";
var aUsers = ["Brian", "Anna", "James"];

app.get('/api/user', (req, res) => {
    let oResponse = {users: 3, version: version, path: "/api/user"};
    res.send(oResponse);
})

app.get('/api/user/:userId', (req, res) => {
    let userId = parseInt(req.params.userId);
    let user;

    if(userId > 3 || userId === 0 || Number.isInteger(userId) === false) {
        user = "N/A";
    } else {
        user = aUsers[userId - 1];
    }

    let oResponse = {user: user, version: version, path: "/api/user/:userId"};
    res.send(oResponse);
})

app.listen(8080, () => {
 console.log("Server running on port 8080");
});