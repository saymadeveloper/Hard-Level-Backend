let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxLength: 50 },
    lastName: { type: String, required: true, maxLength: 50 },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: Date,
    modified_at: Date,
})
userTable = mongoose.model("users", userSchema, "users")

module.exports = userTable;