const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            // Sets username type value as a string that is required and unique
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            unique: true,
            // regex value used to validate the email
            match: [/.+@.+\..+/, 'Must match an email address!']
          },
          password: {
            type: String,
            required: true,
            minlength: 5
          }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const User = model('User', userSchema);

module.exports = User;