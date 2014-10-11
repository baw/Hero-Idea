function index(req, res, app) {
    var idea = app.get("db").model("idea");

    idea.find({}).sort({x:-1}).limit(20).exec(function (data) {
        res.json(data);
    });
};

module.exports = {
    "index": index
};
