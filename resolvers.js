const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    }
  }
}

module.exports = resolvers;