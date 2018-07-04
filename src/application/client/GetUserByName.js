// The applications are the cases of use in which different
// consultation processes and other logical processes are
// carried out to give a response to the request.
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
