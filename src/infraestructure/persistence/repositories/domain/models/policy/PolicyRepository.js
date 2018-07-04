// Repositories handle the logic of database connection and queries
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
			const response = await axios.get(this.config.POLICIES);
			let policies = [];
			response.data.policies.forEach(function(value, indice, array) {
				const policy = this.createPolicy(
					value.id,
					value.amountInsured,
					value.email,
					value.inceptionDate,
					value.installmentPayment,
					value.clientId
				);
				policies.push(policy.toJSON());
			}, this);
			return policies;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyRepository;
