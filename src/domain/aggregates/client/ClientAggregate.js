import { find } from "lodash";

class ClientAggregate {
	constructor({ ClientRepository }) {
		this.ClientRepository = ClientRepository;
	}

	async getAll() {
		try {
			const clients = await this.ClientRepository.getAll();
			return clients;
		} catch (error) {
			console.error(error);
		}
	}

	async getByUsername(name) {
		try {
			const clients = await this.ClientRepository.getAll();
			const result = find(clients, { name: name });
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getById(id) {
		try {
			const clients = await this.ClientRepository.getAll();
			const result = find(clients, { id: id });
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientAggregate;