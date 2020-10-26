'use strict';
const {client} = require(`./client.js`);

class Category {
  static async getAll() {
    const res = await client.get(`/categories`);
    return res.data;
  }
}

module.exports = Category;
