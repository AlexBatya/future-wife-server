const request = require('supertest');
const app = require('../build/app.js').default;
const auth = require("../build/middleware/auth.middleware.js");
const config = require('../build/config/localhost.json');

describe("GET /api/guests", () => {
	it("Должно выдать json. Либо нет гостей либо массив гостей", async () => {
		const response = await request(app)
			.get('/api/guests')
			.set("Authorization", config.server.token)
		expect(response.status).toBe(200);
	})

	it("Должен находится определённый гость по id, либо писать что такого нет", async () => {
		const response = await request(app)
			.get('/api/guests/Иван%20Иванов')
			.set("Authorization", config.server.token)
		expect(response.status).toBe(200);
	})
})
