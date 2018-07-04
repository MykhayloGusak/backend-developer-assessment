const container = require("../../../../src/container");
const createPolicy = container.resolve("createPolicy");

describe("Models: Test Policy Classes", () => {
	test("Test Policy Model", async done => {
		const result = createPolicy(
			"64cceef9-3a01-49ae-a23b-3761b604800b",
			1825.89,
			"inesblankenship@quotezart.com",
			"2016-06-01T03:33:32Z",
			true,
			"e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
		);
		expect(result.id).toEqual("64cceef9-3a01-49ae-a23b-3761b604800b");
		expect(result.amountInsured).toEqual(1825.89);
		expect(result.email).toEqual("inesblankenship@quotezart.com");
		expect(result.inceptionDate).toEqual("2016-06-01T03:33:32Z");
		expect(result.installmentPayment).toEqual(true);
		expect(result.clientId).toEqual("e8fd159b-57c4-4d36-9bd7-a59ca13057bb");
		done();
	});
});
