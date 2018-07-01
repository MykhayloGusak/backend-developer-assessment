import axios from "axios";

class PolicyRepository {
	constructor({ config }) {
		this.config = config;
	}
	async getAllPolicies() {
		try {
			const response = await axios.get(
				"http://www.mocky.io/v2/580891a4100000e8242b75c5"
			);
			console.log(response);
			return response;
		} catch (error) {
			console.error(error);
		}
	}
}

export default new PolicyRepository();
