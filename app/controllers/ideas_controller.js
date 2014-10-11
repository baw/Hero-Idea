function index(req, res, app) {
    var idea = getModel(app);

    idea.find({}).sort({x:-1}).limit(20).exec(function (data) {
        res.json(data);
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
    "create": create
};
