const { gql } = require('apollo-server');

const types = gql`

  type Query {
      users: [User] 
    }

  type User {
    id: String
    firstName: String
    lastName: String
    username: String
    password: String
    # dateCreated: Date
  }
`;

module.exports = types;