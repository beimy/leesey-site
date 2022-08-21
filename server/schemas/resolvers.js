const { User } = require('../models');
const { AuthenicationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password');
        }
    }
};

module.exports = resolvers;
