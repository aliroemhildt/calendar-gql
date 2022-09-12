const { ApolloServer } = require('apollo-server');
const data = require('./data/books.ts');
const resolvers = require('./resolvers.ts');
const typeDefs = require('./schema.ts'); // why can it not be named typeDefs in the other file? 

console.log (data);

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`🫡 Server ready at ${url}`);
  });
