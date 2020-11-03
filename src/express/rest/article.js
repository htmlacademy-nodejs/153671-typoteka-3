'use strict';
const {client} = require(`./client.js`);

class Article {

  static async findAll() {
    const res = await client.get(`/articles`);
    return res.data;
  }

  static async findOne(opts) {
    const {id} = opts || {};
    const res = await client.get(`/articles/${id}`);
    return res.data;
  }

  static async getCommentsOnArticleById(opts) {
    const {id} = opts || {};
    const res = await client.get(`/articles/${id}/comments`);
    return res.data;
  }

  static async add(opts) {
    const {id} = opts || {};
    const res = await client.post(`/articles/${id}`);
    return res.data;
  }

  static async createNew(article) {
    const res = await client.post(`/articles`, article);
    return res.data;
  }
}

module.exports = Article;
