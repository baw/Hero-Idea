module.exports = function (app) {
    var mongoose = app.get("db");

    var ideaSchema = mongoose.Schema({
        title       : String,
        description : String,
        created_on  : { type: Date, default: Date.now }
    });

    mongoose.model("idea", ideaSchema);
};

