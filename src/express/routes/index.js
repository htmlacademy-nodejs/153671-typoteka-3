'use strict';
const {Router} = require(`express`);
const articlesRoutes = require(`./articles-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);
// eslint-disable-next-line new-cap
const router = Router();

router.use(`/articles`, articlesRoutes);
router.use(`/my`, myRoutes);
router.use(`/`, mainRoutes);

module.exports = router;
