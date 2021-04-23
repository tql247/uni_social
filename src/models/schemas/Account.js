const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Why no username?'],
        unique: [true, 'This email is exist']
    },
    password: {
        type: String,
        required: [true, 'Why no password?']
    },
    full_name: {
        type: String,
        required: [true, 'Why no name?']
    },
    class_id: {
        type: String
    },
    falcuty: {
        type: String
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'faculty'],
        required: [true, 'Why no role?']
    },
    token: {
        type: String,
    }
});

module.exports = AccountSchema