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
				resultClient.id
			);
			return resultPolicy;
		} catch (error) {
			console.error(error);
		}
	}
}

export default GetPolicyByUserName;
