function create(req, res, app) {
    var Vote = getModel(app);
    var vote = "";
    
    req.on("data", function (data) {
        vote = data;
    });

    req.on("end", function () {
        console.log("vote data: " + vote);
        
        vote = JSON.parse(vote);
        vote.vote.user_id = req.user.id

        Vote.create(vote.vote, function (err, data) {
            if (err) throw err;

            res.json(data);
        });
    });
}

function update(req, res, app) {
    var Vote = getModel(app);
}

function getModel(app) {
    return app.get("db").model("vote");
}

module.exports = {
    "create": create,
    "update": update
}
