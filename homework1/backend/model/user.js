const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String},
    username: {type: String},
    password: {type: String},
    photo: {type: String},
    sex: {type: String},
    description: {type: String},
    role: {type: String},
    status: {type: String}
},
{ collation: { locale: 'en_US', strength: 1 }} )

module.exports = mongoose.model('Users', UserSchema);