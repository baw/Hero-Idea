function index(req, res, app) {
    var ideas = app.get("db").ideas;
    res.json(ideas.find({}).sort({x:-1}).limit(20));
};

module.exports = {
    "index": index
};
