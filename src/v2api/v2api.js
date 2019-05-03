var express = require("express");
var app = express();

var version = "v2";
var aUsers = ["Jonas", "Lea", "Leon", "Lena", "Frank"];

app.get('/api/user', (req, res) => {
    let oResponse = {users: 5, user_groups: 1, version: version, path: "/api/user"};
    res.send(oResponse);
})

app.get('/api/user/:userId', (req, res) => {
    let userId = parseInt(req.params.userId);
    let user;

    if(userId > 5 || userId === 0 || Number.isInteger(userId) === false) {
        user = "N/A";
    } else {
        user = aUsers[userId - 1];
    }

    let oResponse = {user: user, group: "user group 1", version: version, path: "/api/user/:userId"};
    res.send(oResponse);
})

app.listen(8080, () => {
 console.log("Server running on port 8080");
});