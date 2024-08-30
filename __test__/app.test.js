const request = require('supertest');
const app = require('../build/app.js').default;
const auth = require("../build/middleware/auth.middleware.js");
const config = require('../build/config/localhost.json');

describe("GET /api/guests", () => {
	// it("Должно выдать json. Либо нет гостей либо массив гостей", async () => {
	// 	const response = await request(app)
	// 		.get('/api/guests')
	// 		.set("Authorization", config.server.token)
	// 	expect(response.status).toBe(200);
	// })
	//
	// 
	//
	// it("POST /api/guests/ Должен добавится определённый гость", async () => {
	// 	const data = {
	// 		id_guest: 1,
	// 		full_name: "Иван Иванов",
	// 		attending : true,
	// 		invitation_text: "Соси дрочи",
	// 		plus_one: true,
	// 		family: true
	// 	}
	// 	const response = await request(app)
	// 		.post('/api/guests')
	// 		.set("Authorization", config.server.token)
	// 		.send(data)
	// 	expect(response.status).toBe(201)
	// })
	//
	// it("GET /api/guests/Иван%20Иванов Должен находится определённый гость по ФИО (200), либо писать что такого нет(404)", async () => {
	// 	const response = await request(app)
	// 		.get('/api/guests/Иван%20Иванов')
	// 		.set("Authorization", config.server.token)
	// 	expect(response.status).toBe(200);
	// })
	//
	// it("PUT /api/guests/Иван%20Иванов Должно изменять данные в о госте", async () => {
	// 	const data2= {
	// 		id_guest: 1,
	// 		full_name: "Иван Иванов",
	// 		attending : true,
	// 		invitation_text: "Не Соси дрочи",
	// 		plus_one: true,
	// 		family: false, 
	// 	}
	// 	const response = await request(app)
	// 		.put('/api/guests/Иван%20Иванов')
	// 		.set("Authorization", config.server.token)
	// 		.send(data2)
	// 	expect(response.status).toBe(200);
	// })
	//
	it("DELETE /api/guests Должен удалится гость по выбранному full_name", async () => {
		const response = await request(app)
			.delete("/api/guests/id_guest/1")
			.set("Authorization", config.server.token)
		expect(response.status).toBe(200)
	})
	// it("Должно выдать json. Либо нет семей либо массив семей", async () => {
	// 	const response = await request(app)
	// 		.get('/api/family')
	// 		.set("Authorization", config.server.token)
	// 	expect(response.status).toBe(200);
 //  })
	//
 //  it("POST /api/family/ Должна добавится определённая семья", async () => {
	// 	const data = {
	// 		family_name: "Семья Ивановых",
	// 		text: "Приглашаем вас на нашу свадьбу!",
	// 		presence: true
	// 	}
	// 	const response = await request(app)
	// 		.post('/api/family')
	// 		.set("Authorization", config.server.token)
	// 		.send(data)
	// 	expect(response.status).toBe(201)
 //  })
	//
 //  it("GET /api/family/Семья%20Ивановых Должна находится определённая семья по имени (200), либо писать что такой нет (404)", async () => {
	// 	const response = await request(app)
	// 		.get('/api/family/Семья%20Ивановых')
	// 		.set("Authorization", config.server.token)
	// 	expect(response.status).toBe(200);
 //  })

  // it("PUT /api/family/Семья%20Ивановых Должно изменять данные о семье", async () => {
		// const data2 = {
		// 	presence: false
		// }
		// const response = await request(app)
		// 	.put('/api/family/1')
		// 	.set("Authorization", config.server.token)
		// 	.send(data2)
		// expect(response.status).toBe(200);
  // })

  // it("DELETE /api/family Должна удалится семья по выбранному имени", async () => {
  //   const response = await request(app)
  //     .delete("/api/family/Семья%20Ивановых")
  //     .set("Authorization", config.server.token)
  //   expect(response.status).toBe(200)
  // })
})
