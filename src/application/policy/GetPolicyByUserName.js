// The applications are the cases of use in which different
// consultation processes and other logical processes are
// carried out to give a response to the request.
class GetPolicyByUserName {
	constructor({ ClientAggregate, PolicyAggregate }) {
		this.ClientAggregate = ClientAggregate;
		this.PolicyAggregate = PolicyAggregate;
	}

	async get(userName) {
		try {
			const resultClient = await this.ClientAggregate.getByUsername(
				userName
			);
			const resultPolicy = await this.PolicyAggregate.getByClientId(
				resultClient[0].id
			);
			return resultPolicy;
		} catch (error) {
			console.error(error);
		}
	}
}

export default GetPolicyByUserName;
