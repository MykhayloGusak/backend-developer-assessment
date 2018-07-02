class PolicyController {
	constructor({ GetPolicyByUserName }) {
		this.GetPolicyByUserName = GetPolicyByUserName;
	}

	async getPolicyByUserName(req, res) {
		const user = await this.GetPolicyByUserName.prototype.get(
			req.params.userName
		);
		return res.send(user).json();
	}
}

export default PolicyController;
