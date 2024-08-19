const axios = require('axios');
const fs = require('fs');
const path = require('path');

const token = JSON.parse(fs.readFileSync('./config/localhost.json')).server.token;
const PORT = JSON.parse(fs.readFileSync('./config/localhost.json')).server.PORT;

const URL = "http://localhost" + ":" + PORT;

const axiosConfig = (url, data) => {
	return {
		method: "post",
		url: URL + url,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token 
		},
		data: data
	}
};

module.exports = function post(url ,data){
	return new Promise(async res => {

		const req = await axios(axiosConfig( "/api" + url, data)) 
		res(req.data)

	})
}  
