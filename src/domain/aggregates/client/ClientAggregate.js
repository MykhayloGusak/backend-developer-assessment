class ClientAggregate {
	constructor({ ClientRepository }) {
		this.ClientRepository = ClientRepository;
	}
	//If necessary, you can create, update and delete functions. But this is not
	//the case so only one getAll() has been used.

	async getAll() {
		try {
			const clients = await this.ClientRepository.getAll();
		} catch (error) {
			console.error(error);
		}
	}
}

export default ClientAggregate;
