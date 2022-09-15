const { gql } = require('apollo-server');

const types = gql`

  type Query {
      users: [User!]
      user(id: ID!): User!
      test(name: String): Test
    }

  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    # dateCreated: Date
  }

  type Test {
    name: String
  }
`;

module.exports = types;