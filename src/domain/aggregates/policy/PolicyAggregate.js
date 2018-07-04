// The aggregates are a root element that allow access to
// a collection and manage it. From here you can search,
// filter, add, modify and remove items from the collection.
import { filter } from "lodash";

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
			const result = filter(policies, { id: id });
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getByClientId(clientId) {
		try {
			const policies = await this.PolicyRepository.getAll();
			const result = filter(policies, { clientId: clientId });
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export default PolicyAggregate;
