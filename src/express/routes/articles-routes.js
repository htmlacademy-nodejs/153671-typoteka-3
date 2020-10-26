'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const articlesRoutes = Router();
const Article = require(`../rest/Article`);
const Category = require(`../rest/Category`);
const path = require(`path`);
const multer = require(`multer`);
const {nanoid} = require(`nanoid`);
const {pageContentPost, pageContentNewPost, pageContentEditPost, pageContentCategory} = require(`../mock`);

const UPLOAD_DIR = `../upload/img/`;
const uploadDirAbsolute = path.resolve(__dirname, UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: uploadDirAbsolute,
  filename: (req, file, cb) => {
    const uniqueName = nanoid(10);
    const extension = file.originalname.split(`.`).pop();
    cb(null, `${uniqueName}.${extension}`);
  },
});
const upload = multer({storage});

articlesRoutes.get(`/category/:id`, (req, res) => res.render(`articles/articles-by-category`, pageContentCategory));

articlesRoutes.get(`/add`, (req, res) => res.render(`articles/new-post`, pageContentNewPost));

articlesRoutes.post(`/add`, upload.single(`file`), async (req, res) => {
  const {body, file} = req;
  const offerData = {
    picture: file.filename,
    title: body[`title`],
    announce: body[`announce`],
    fullText: body[`fullText`],
    category: body[`category`],
    createdDate: body[`datetime`],
  };
  try {
    try {
      await Article.createNew(offerData);
    } catch (error) {

      console.error(`${error}`);
    }
    res.redirect(`/my`);
  } catch (error) {
    res.redirect(`back`);
  }
});

articlesRoutes.get(`/edit/:id`, async (req, res) => {
  pageContentEditPost.post = await Article.findOne({id: req.params.id});
  res.render(`articles/new-post`, pageContentEditPost);
});

articlesRoutes.get(`/:id`, (req, res) => res.render(`articles/post`, pageContentPost));

module.exports = articlesRoutes;
