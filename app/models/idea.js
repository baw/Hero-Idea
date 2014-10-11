var mongoose = require("mongoose");

var ideaSchema = mongoose.Schema({
    title       : String,
    description : String,
    created_on  : { type: Date, default: Date.now }
});
