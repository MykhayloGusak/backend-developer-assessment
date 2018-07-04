// The applications are the cases of use in which different
// consultation processes and other logical processes are
// carried out to give a response to the request.
class GetUserByPolicyNumber {
	constructor({ ClientAggregate, PolicyAggregate }) {
		this.ClientAggregate = ClientAggregate;
		this.PolicyAggregate = PolicyAggregate;
	}

	async get(policyNumber) {
		try {
			const resultPolicy = await this.PolicyAggregate.getById(
				policyNumber
			);
			const resultClient = await this.ClientAggregate.getById(
				resultPolicy[0].clientId
			);
			return resultClient;
		} catch (error) {
			console.error(error);
		}
	}
}

export default GetUserByPolicyNumber;
