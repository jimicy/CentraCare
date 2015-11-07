var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
 name: String,
 email: String,
 password: String,
 editable: Boolean,
 given_permissions: [{user_id: String, editable: Boolean, viewable: Boolean}]
});

module.exports = mongoose.model('patient', PatientSchema);