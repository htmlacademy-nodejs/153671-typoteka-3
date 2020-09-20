'use strict';

const request = require(`supertest`);
const {createApp} = require(`../cli/server`);
const fs = require(`fs`);
let server;

// статья для тестирования получения и изменения
const testArticle = {
  id: `articleId`,
  title: `title`,
  announce: `announce`,
  fullText: `fullText`,
  createdDate: `2020-09-14T00:55:06.833Z`,
  category: [
    `За жизнь`,
    `Кино`,
    `IT`,
  ],
  comments: [
    {
      id: `comment-1`,
      text: `Плюсую, но слишком много буквы! Это где ж такие красоты?`,
    },
    {
      id: `comment-2`,
      text: `Это где ж такие красоты?`,
    },
  ],
};

// статья для тестирования создания статьи
const articleToCreate = {
  "id": `articleToCreate`,
  "comments": [
    {
      "id": `commentId`,
      "text": `comment-text`
    }
  ],
  "title": `title`,
  "createdDate": `2020-4-11 18:45:43`,
  "announce": `announce-1`,
  "fullText": `fullText-1`,
  "category": [
    `category`,
  ]
};

// статья для тестирования удаления статьи
const articleToDelete = {
  "id": `articleToDelete`,
  "comments": [
    {
      "id": `commentId`,
      "text": `comment-text`
    }
  ],
  "title": `title`,
  "createdDate": `2020-4-11 18:45:43`,
  "announce": `announce-1`,
  "fullText": `fullText-1`,
  "category": [
    `category`,
  ]
};


const appendMockArticle = (file, mockArticle) => {
  let mocks = JSON.parse(fs.readFileSync(file));
  mocks.push(mockArticle);
  fs.writeFileSync(file, JSON.stringify(mocks));
};

const removeMockArticle = (file, mockArticle) => {
  let mocks = JSON.parse(fs.readFileSync(file));
  mocks = mocks.filter((article) => article.id !== mockArticle.id);
  fs.writeFileSync(file, JSON.stringify(mocks));
};

beforeAll(async () => {
  appendMockArticle(`mocks.json`, testArticle);
  appendMockArticle(`mocks.json`, articleToDelete);
  server = await createApp();
});

afterAll(() => {
  removeMockArticle(`mocks.json`, testArticle);
  appendMockArticle(`mocks.json`, articleToDelete);
  appendMockArticle(`mocks.json`, articleToCreate);
});

describe(`API articles`, () => {

  describe(`/GET articles`, () => {
    test(`Должен вернуть статус 200`, async () => {
      const res = await request(server).get(`/api/articles`);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty(`length`);
      expect(res.body.length).toBeGreaterThan(0);
    });

    test(`Должен вернуть массив статей`, async () => {
      const res = await request(server).get(`/api/articles`);

      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe(`/GET/:articleId articles`, () => {

    test(`Должен вернуть статус 200 и сатью`, async () => {
      const res = await request(server).get(`/api/articles/articleId`);
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(JSON.stringify(testArticle));
    });

    test(`Должен вернуть статус 404 при неверном запросе`, async () => {
      const res = await request(server).get(`/api/articles/wrongId`);
      expect(res.statusCode).toBe(404);
    });

  });

  describe(`/POST articles`, () => {
    test(`Должен вернуть статус 201 и созданную статью при создании статьи`, async () => {
      const res = await request(server)
        .post(`/api/articles`)
        .send(articleToCreate);

      expect(res.statusCode).toBe(201);
      expect(res.text).toBe(JSON.stringify(articleToCreate));
    });
  });

  describe(`/PUT articles`, () => {
    test(`Должен вернуть статус 200 и статью `, async () => {
      testArticle.fullText = `test text`;

      const res = await request(server)
        .put(`/api/articles/${testArticle.id}`)
        .send(testArticle);

      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(JSON.stringify(testArticle));
    });

    test(`Должен вернуть статуc 404 при неверном id статьи`, async () => {
      let articleStub = {...testArticle};
      articleStub.id = `wrongId`;

      const res = await request(server)
        .put(`/api/articles`)
        .send(articleStub);

      expect(res.statusCode).toBe(404);
    });
  });

  describe(`/DELETE/:articleId articles`, () => {
    test(`Должен вернуть статус 200`, async () => {
      const res = await request(server).delete(`/api/articles/${articleToDelete.id}`);
      expect(res.statusCode).toBe(200);
    });

    test(`Должен вернуть статус 404 при неверном id`, async () => {
      const res = await request(server).delete(`/api/articles/wrongId`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe(`/GET/:articleId/comments articles`, () => {
    test(`Должен вернуть статус 200 и коменты статьи`, async () => {
      const res = await request(server).get(`/api/articles/${testArticle.id}/comments`);

      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(JSON.stringify(testArticle.comments));
    });
  });

  describe(`/DELETE/:articleId/comments/:commentId articles`, () => {

    test(`Должен вернуть статус 200 и удаленый комент`, async () => {
      const res = await request(server).delete(`/api/articles/${testArticle.id}/comments/${testArticle.comments[0].id}`);
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(JSON.stringify(testArticle.comments[0]));
    });

    test(`Должен вернуть статус 404 при неверном id комента`, async () => {
      const res = await request(server).delete(`/api/articles/${testArticle.id}/comments/wrongId`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe(`/POST/:articleId/comments articles`, () => {
    test(`Должен вернуть статус 201 и созданный комент`, async () => {
      const textComment = {
        id: `comment-test`,
        text: `Плюсую, но слишком много буквы! Это где ж такие красоты?`,
      };

      const res = await request(server)
        .post(`/api/articles/${testArticle.id}/comments/`)
        .send(textComment);

      expect(res.statusCode).toBe(201);
      expect(res.text).toBe(JSON.stringify(textComment));
    });
  });

});
