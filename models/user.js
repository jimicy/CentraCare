var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 name: String,
 date: Date,
 description: String
});

module.exports = mongoose.model('User', UserSchema);