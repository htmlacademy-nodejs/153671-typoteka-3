'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const myRoutes = Router();
const {pageContentMy, pageContentMyComments} = require(`../mock`);
const Article = require(`../rest/article`);

myRoutes.get(`/`, async (req, res) => {
  pageContentMy.postList = await Article.findAll();
  res.render(`my/my`, pageContentMy);
});
myRoutes.get(`/comments`, async (req, res) => {
  const firstThreeArticlesIds = (await Article.findAll())
    .map((i) => i.id)
    .slice(0, 3);
  const commentList = [];

  for (const articleId of firstThreeArticlesIds) {
    const articleComments = await Article.getCommentsOnArticleById({id: articleId});
    commentList.push(articleComments);
  }

  pageContentMyComments.commentList = commentList;
  res.render(`my/comments`, pageContentMyComments);
});

module.exports = myRoutes;
