const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/api/';
  }

  getUsers() {
    return this.get('users');
  }

  getSingleUser(id) {
    console.log(id)
    return this.get(`users/${id}`);
  }

  postUser() {

  }

  updateUser() {

  }

  deleteUser() {

  }

  getEvents() {

  }

  getSingleEvent() {

  }

  getEventsByUser() {

  }

  postEvent() {

  }

  updateEvent() {

  }

  deleteEvent() {
    
  }

}

module.exports = UserAPI;