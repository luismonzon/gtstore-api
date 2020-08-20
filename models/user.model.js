const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const ObjectIdSchema = mongoose.Schema.ObjectId;

const UserSchema = mongoose.Schema({
    id: ObjectIdSchema,
    personalIdentifier: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    town: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    zipCode: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    isVerified: Boolean
})

UserSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ id: this.id }, process.env.PRIVATE_KEY);
    return token;
}

const User = mongoose.model('User', UserSchema);

const schema = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255).required(),
    personalIdentifier: Joi.string().min(5).max(255).required(),
    address: Joi.string().min(2).max(255).required(),
    city: Joi.string().min(2).max(255).required(),
    town: Joi.string().min(2).max(255).required(),
    zipCode: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
})

exports.User = User;
exports.UserValidationSchema = schema;
