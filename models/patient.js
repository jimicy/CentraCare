var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
 email: String,
 password: String,
 editable: Boolean,
 given_permissions: [{email: String, editable: Boolean, viewable: Boolean}],
 form: {profile:[], }
});

module.exports = mongoose.model('patient', PatientSchema);