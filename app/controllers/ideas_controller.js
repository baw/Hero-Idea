function index(req, res, app) {
    var idea = getModel(app);

    idea.find({}).sort({x:-1}).limit(20).exec(function (err, data) {
        if (err) throw err;
        res.json(data);
    });
}

function show(req, res, app) {
    var Idea = getModel(app);
    var idea_id = req.params.idea_id;

    Idea.findById(idea_id, function (err, idea) {
        if (err) throw err;

        res.json(idea);
    });
}

function create(req, res, app) {
    var Idea = getModel(app);
    var post = "";
    
    req.on("data", function (data) {
        post += data;
    });
    
    req.on("end", function () {
        console.log("post data: " + post);
        post = JSON.parse(post);

        post.idea.owner_id = req.user.id;

        Idea.create(post.idea, function (err, data) {
            if (err) throw err;

            res.json(data);
        });

    });
}

function getModel(app) {
    return app.get("db").model("idea");
}

module.exports = {
    "index": index,
    "show": show,
    "create": create
};
