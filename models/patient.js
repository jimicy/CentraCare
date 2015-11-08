var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
 email: String,
 password: String,
 name: String,
 form: {profile:[]}
});

module.exports = mongoose.model('patient', PatientSchema);