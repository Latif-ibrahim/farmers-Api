const mongoose = require("mongoose");

const { Schema,model } = mongoose;
const usersSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    location: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },

});

const User = model("user", usersSchema);

module.exports = User;