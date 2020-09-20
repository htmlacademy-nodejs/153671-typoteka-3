'use strict';

const request = require(`supertest`);
const {createApp} = require(`../cli/server`);
let server;


beforeAll(async () => {
  server = await createApp();
});
describe(`API search`, () => {
  describe(`/GET search`, () => {
    test(`Должен вернуть статус 200`, async () => {
      const res = await request(server).get(encodeURI(`/api/search?query=title`));

      expect(res.statusCode).toBe(200);
    });

    test(`Должен вернуть статус 400 при пустом запросе`, async () => {
      const res = await request(server).get(encodeURI(`/api/search?query=`));

      expect(res.statusCode).toBe(400);
    });

    test(`Должен вернуть статус 404 если нечего небыло найденно`, async () => {
      const res = await request(server).get(encodeURI(`/api/search?query=${null}`));

      expect(res.statusCode).toBe(404);
    });
  });

});
