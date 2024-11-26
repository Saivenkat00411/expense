const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter name'],
    },
    email: {
        type: String,
        required: [true, 'Enter email'],

    },
    password: {
        type: String,
        required: [true, 'Enter password'],
    },
});

userSchema.pre('save', async function (next)  {
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt)
    next();
})
const userModel = mongoose.model('ExpenseUserModel', userSchema);

module.exports = userModel;