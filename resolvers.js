const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    },

    user: (_, { id }, { dataSources }) => {
      return dataSources.userAPI.getSingleUser(id);
    },

    test: (_, name, __) => {
      console.log(name);
      return { name };
    }

  }
}

module.exports = resolvers;