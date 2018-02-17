var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/contact");
var nameSchema = new mongoose.Schema({
    age: String,
    gender: String,
    life_style: String,
    name: {
        type: String,
        required: [true, 'Name is required.'],
       },
     other:String,
     comfortable:String  
});

var User = mongoose.model('contact', nameSchema);
module.exports = {
    User
};