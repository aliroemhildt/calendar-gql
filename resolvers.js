const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    },

    user: ({ id }, _, { dataSources }) => {
      return dataSources.userAPI.getSingleUser(id);
    }
  }
}

module.exports = resolvers;