class ClientController {
	constructor({ GetUserById, GetUserByName, GetUserByPolicyNumber }) {
		this.GetUserById = GetUserById;
		this.GetUserByName = GetUserByName;
		this.GetUserByPolicyNumber = GetUserByPolicyNumber;
	}

	async getUserById(req, res) {
		const user = await this.GetUserById.get(req.params.userID);
		return res.send(user).json();
	}

	async getUserByName(req, res) {
		const user = await this.GetUserByName.get(req.params.userName);
		return res.send(user).json();
	}

	async getUserByPolicyNumber(req, res) {
		const user = await this.GetUserByPolicyNumber.get(req.params.policyID);
		return res.send(user).json();
	}
}

export default ClientController;
