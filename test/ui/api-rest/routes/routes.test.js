const container = require("../../../../src/container");
const request = require("supertest");
const expressApp = container.resolve("expressApp");
let authorization = "";

describe("API (Routes and Controllers): Test if the api service is working", () => {
	test("A Status Code 200 and a JSON with the status variable 'ok' is expected.", done => {
		request(expressApp)
			.get("/api/api-status")
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.type).toEqual("application/json");
				expect(response.body.status).toEqual("ok");
				done();
			});
	});
});

describe("API: Testing Client routes", () => {
	test("Testing Signin route", done => {
		request(expressApp)
			.post("/api/clients/signin")
			.send({
				username: "Britney",
				password: ""
			})
			.set("Content-Type", "application/json")
			.set("Accept", "application/json")
			.then(response => {
				expect(response.statusCode).toBe(201);
				expect(response.type).toEqual("application/json");
				expect(response.body.process).toEqual(true);
				authorization = "JWT " + response.body.token;
				done();
			});
	});

	test("Testing Get Client by id", done => {
		request(expressApp)
			.get("/api/clients/id/a0ece5db-cd14-4f21-812f-966633e7be86")
			.set("Authorization", authorization)
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.type).toEqual("application/json");
				expect(response.body[0].name).toEqual("Britney");
				done();
			});
	});

	test("Testing Get Client by name", done => {
		request(expressApp)
			.get("/api/clients/username/Manning")
			.set("Authorization", authorization)
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.type).toEqual("application/json");
				expect(response.body[0].id).toEqual(
					"e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
				);
				done();
			});
	});

	test("Testing Get Client by Policy id ", done => {
		request(expressApp)
			.get("/api/clients/policy/64cceef9-3a01-49ae-a23b-3761b604800b")
			.set("Authorization", authorization)
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.type).toEqual("application/json");
				expect(response.body[0].name).toEqual("Manning");
				done();
			});
	});
});

describe("API (Routes and Controllers): Testing Policy routes", () => {
	test("Testing Get Policy by Client name", done => {
		request(expressApp)
			.get("/api/policies/client/Britney")
			.set("Authorization", authorization)
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.type).toEqual("application/json");
				expect(response.body[0].id).toEqual(
					"7b624ed3-00d5-4c1b-9ab8-c265067ef58b"
				);
				done();
			});
	});
});
