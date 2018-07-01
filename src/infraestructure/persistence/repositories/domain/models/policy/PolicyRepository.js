import axios from "axios";
import Policy from "../../../../../../domain/models/policy";

class PolicyRepository {
	constructor({ config }) {
		this.config = config;
	}

	//If necessary, you can create, update and delete functions. But this is not
	//the case so only one getAll() has been used.

	async getAll() {
		try {
			const response = await axios.get(this.config.POLICIES);
			let policies = [];
			response.data.policies.forEach(function(value, indice, array) {
				const policy = new Policy({
					id: value.id,
					amountInsured: value.amountInsured,
					email: value.email,
					inceptionDate: value.inceptionDate,
					installmentPayment: value.installmentPayment,
					clientId: value.clientId
				});
				policies.push(policy.toJSON());
			});
			return policies;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyRepository;
