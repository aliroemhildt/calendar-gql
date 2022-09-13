const { ApolloServer } = require('apollo-server'); // require vs import? 
// const data = require('./data/books.ts');
const resolvers = require('./resolvers.ts');
const typeDefs = require('./schema.ts'); // why can it not be named typeDefs in the other file?
const UserAPI = require('./data/user-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      userAPI: new UserAPI()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🫡 Server ready at ${url}`);
});
