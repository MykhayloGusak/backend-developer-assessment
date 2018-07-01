import axios from "axios";
import Client from "../../../../../../domain/models/client";

class ClientRepository {
	constructor({ config }) {
		this.config = config;
	}

	//If necessary, you can create, update and delete functions. But this is not
	//the case so only one getAll() has been used.

	async getAll() {
		try {
			const response = await axios.get(this.config.CLIENTS);
			let clients = [];
			response.data.clients.forEach(function(value, indice, array) {
				const client = new Client({
					id: value.id,
					name: value.name,
					email: value.email,
					role: value.role
				});
				clients.push(client.toJSON());
			});
			console.log(clients);
			return clients;
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientRepository;
