function index(req, res, app) {
    var idea = getModel(app);

    idea.find({}).sort({x:-1}).limit(20).exec(function (data) {
        res.json(data);
    });
};

function getModel(app) {
    return app.get("db").model("idea");
}

module.exports = {
    "index": index
};
