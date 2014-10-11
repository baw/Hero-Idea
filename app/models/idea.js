module.exports = function (app) {
    var mongoose = app.get("db");

    var ideaSchema = mongoose.Schema({
        title       : String,
        description : String,
        created_at  : Date,
        updated_at  : Date
    });

    ideaSchema.pre("save", function (next) {
        var now = new Date();

        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }

        next();
    });

    mongoose.model("idea", ideaSchema);
};

