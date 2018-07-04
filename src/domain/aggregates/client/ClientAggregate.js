// The aggregates are a root element that allow access to
// a collection and manage it. From here you can search,
// filter, add, modify and remove items from the collection.
import { filter } from "lodash";

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
			const result = filter(clients, { name: name });
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	async getById(id) {
		try {
			const clients = await this.ClientRepository.getAll();
			const result = filter(clients, { id: id });
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientAggregate;
