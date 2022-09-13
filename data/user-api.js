const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://localhost:3000/api/';
  }

  getUsers() {
    return this.get('users');
  }
}

module.exports = UserAPI;