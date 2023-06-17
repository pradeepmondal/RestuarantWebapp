const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const adminUserSchema = new Schema({
    username:{
        type: String,
        required:true
    },

    password:{
        type: String,
        required:true
    },

    date_created: {
        type: Date,
        required:true,
        default: Date.now
    }
})

adminUserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

adminUserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const collection = mongoose.model("adminUser", adminUserSchema)

module.exports = collection