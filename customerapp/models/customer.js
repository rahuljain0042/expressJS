var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustSchema = new Schema({
	firstname:String,
	lastname:String,
	email:String

});


module.exports = mongoose.model('Customer',CustSchema);