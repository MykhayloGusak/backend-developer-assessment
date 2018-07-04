// The applications are the cases of use in which different
// consultation processes and other logical processes are
// carried out to give a response to the request.
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
