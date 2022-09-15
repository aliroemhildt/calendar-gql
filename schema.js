const { gql } = require('apollo-server');

const types = gql`

  type Query {
      users: [User!]
      user(id: ID!): User!
    }

  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    # dateCreated: Date
  }
`;

module.exports = types;