import axios from "axios";

class PolicyRepository {
	constructor({ config, createPolicy }) {
		this.config = config;
		this.createPolicy = createPolicy;
	}

	//If necessary, you can create, update and delete functions. But this is not
	//the case so only one getAll() has been used.

	async getAll() {
		try {
			const self = this;
			const response = await axios.get(this.config.POLICIES);
			let policies = [];
			response.data.policies.forEach(function(value, indice, array) {
				const policy = self.createPolicy(
					value.id,
					value.amountInsured,
					value.email,
					value.inceptionDate,
					value.installmentPayment,
					value.clientId
				);
				policies.push(policy.toJSON());
			});
			return policies;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyRepository;
