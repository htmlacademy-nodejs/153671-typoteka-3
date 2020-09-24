'use strict';

const request = require(`supertest`);
const {createApp} = require(`../cli/server`);
let server;


beforeAll(async () => {
  server = await createApp();
});


describe(`API category`, () => {
  describe(`/GET category`, () => {
    test(`Должен вернуть статус 200`, async () => {
      const res = await request(server).get(`/api/categories`);

      expect(res.statusCode).toBe(200);
    });

    test(`Должен веруть больше 0 категорий`, async () => {
      const res = await request(server).get(`/api/categories`);

      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
