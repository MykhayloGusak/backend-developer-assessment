import axios from "axios";

class ClientRepository {
	constructor({ config, createClient }) {
		this.config = config;
		this.createClient = createClient;
	}

	//If necessary, you can create, update and delete functions. But this is not
	//the case so only one getAll() has been used.

	async getAll() {
		try {
			const response = await axios.get(this.config.CLIENTS);
			let clients = [];
			response.data.clients.forEach(function(value, indice, array) {
				const client = this.createClient(
					value.id,
					value.name,
					value.email,
					value.role
				);
				clients.push(client.toJSON());
			}, this);
			return clients;
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientRepository;
