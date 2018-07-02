class GetUserByName {
	constructor({ ClientAggregate }) {
		this.ClientAggregate = ClientAggregate;
	}

	async get(name) {
		try {
			const client = await this.ClientAggregate.getByUsername(name);
			return client;
		} catch (error) {
			console.error(error);
		}
	}
}

export default GetUserByName;
