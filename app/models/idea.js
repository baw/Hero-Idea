var mongoose = require("mongoose");

var ideaSchema = mongoose.Schema({
    title       : String,
    description : String,
    date        : { type: Date, default: Date.now }
});
