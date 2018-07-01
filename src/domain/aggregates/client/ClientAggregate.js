import { find } from "lodash";

class ClientAggregate {
	constructor({ ClientRepository }) {
		this.ClientRepository = ClientRepository;
	}

	async getByUsername(name) {
		try {
			const clients = await this.ClientRepository.getAll();
			let result = find(clients, { name: name });
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getById(id) {
		try {
			const clients = await this.ClientRepository.getAll();
			let result = find(clients, { id: id });
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientAggregate;
