// Policy Controller
class PolicyController {
	constructor({ GetPolicyByUserName }) {
		this.GetPolicyByUserName = GetPolicyByUserName;
	}
	// Processes related to policies querys
	async getPolicyByUserName(req, res) {
		const policy = await this.GetPolicyByUserName.get(req.params.userName);
		return res.send(policy).json();
	}
}

export default PolicyController;
