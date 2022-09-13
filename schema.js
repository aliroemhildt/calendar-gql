const { gql } = require('apollo-server');

const types = gql`

  type Query {
      books: [Book!]
    }

  type Book {
    title: String!
    author: String!
  }
`;

module.exports = types;