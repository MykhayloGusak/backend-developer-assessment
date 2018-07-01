import { find } from "lodash";

class PolicyAggregate {
	constructor({ PolicyRepository }) {
		this.PolicyRepository = PolicyRepository;
	}

	async getAll() {
		try {
			const policies = await this.PolicyRepository.getAll();
			console.log(policies);
			return policies;
		} catch (error) {
			console.error(error);
		}
	}

	async getById(id) {
		try {
			const policies = await this.PolicyRepository.getAll();
			let result = find(policies, { id: id });
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getByClientId(clientId) {
		try {
			const policies = await this.PolicyRepository.getAll();
			let result = find(policies, { clientId: clientId });
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyAggregate;
