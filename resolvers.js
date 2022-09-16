const resolvers = {
  Query: {
    users: (_parent, __args, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    },

    user: (_parent, { id }, { dataSources }) => {
      return dataSources.userAPI.getSingleUser(id);
    },
  }
}

module.exports = resolvers;