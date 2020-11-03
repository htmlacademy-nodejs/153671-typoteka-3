'use strict';
const {client} = require(`./client.js`);

class Search {
  static async searchByArticle(articleTitle) {
    const res = await client.get(`/search`, {params: {search: articleTitle}});
    return res.data;
  }
}

module.exports = Search;
