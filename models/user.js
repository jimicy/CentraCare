var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 name: String,
 email: String,
 password: String,
 isCareGiver: Boolean,
 patient_permissions: [{patient_id: String, editable: Boolean, viewable: Boolean}],
 profile_image: String,
});

module.exports = mongoose.model('User', UserSchema);