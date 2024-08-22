const request = require('supertest');
const app = require('../build/app.js').default;

describe("GET /api/guests", () => {
	it("Должно выдать json. Либо нет гостей либо массив гостей", async () => {
		const response = await request(app).get('/api/guests');
		expect(response.json).toBe();
	})
})
