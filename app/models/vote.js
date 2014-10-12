module.exports = function (app) {
    var mongoose = app.get("db");

    var voteSchema = mongoose.Schema({
        user_id     : String,
        idea_id     : String,
        value       : { type: String, enum: ["up", "down"]},
        created_at  : Date,
        updated_at  : Date
    });

    voteSchema.pre("save", function (next) {
        var now = new Date();

        this.updated_at = now;
        if (!this.created_at) {

        }

        next();
    });

    mongoose.model("vote", voteSchema);
};

