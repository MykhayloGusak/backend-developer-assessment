import axios from "axios";

class ClientRepository {
	async getAllClients() {
		try {
			const response = await axios.get(
				"http://www.mocky.io/v2/5808862710000087232b75ac"
			);
			console.log(response);
			return response;
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientRepository;
