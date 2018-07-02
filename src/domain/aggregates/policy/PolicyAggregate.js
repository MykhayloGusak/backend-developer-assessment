import { find } from "lodash";

class PolicyAggregate {
	constructor({ PolicyRepository }) {
		this.PolicyRepository = PolicyRepository;
	}

	async getAll() {
		try {
			const policies = await this.PolicyRepository.getAll();
			return policies;
		} catch (error) {
			console.error(error);
		}
	}

	async getById(id) {
		try {
			const policies = await this.PolicyRepository.getAll();
			const result = find(policies, { id: id });
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getByClientId(clientId) {
		try {
			const policies = await this.PolicyRepository.getAll();
			const result = find(policies, { clientId: clientId });
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyAggregate;
