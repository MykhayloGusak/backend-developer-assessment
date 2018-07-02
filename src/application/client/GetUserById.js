class GetUserById {
	constructor({ ClientAggregate }) {
		this.ClientAggregate = ClientAggregate;
	}

	async get(id) {
		try {
			const client = await this.ClientAggregate.getById(id);
			return client;
		} catch (error) {
			console.error(error);
		}
	}
}

export default GetUserById;
