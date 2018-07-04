class ClientController {
	constructor({ GetUserById, GetUserByName, GetUserByPolicyNumber, Signin }) {
		this.GetUserById = GetUserById;
		this.GetUserByName = GetUserByName;
		this.GetUserByPolicyNumber = GetUserByPolicyNumber;
		this.Signin = Signin;
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

	async signin(req, res) {
		const resultSignin = await this.Signin.loginFlow(
			req.body.username,
			req.body.password
		);

		if (resultSignin.process) {
			return res.status(201).json({
				process: resultSignin.process,
				message: resultSignin.message,
				token: resultSignin.token
			});
		} else {
			return res.status(201).json({
				process: resultSignin.process,
				message: resultSignin.message
			});
		}
	}

	loginRequired(req, res, next) {
		if (req.user) {
			next();
		} else {
			return res.status(401).json({
				process: false,
				message: "Unauthorised access, please identify yourself"
			});
		}
	}

	roleAdminCheck(req, res, next) {
		if (req.role === "admin") {
			next();
		} else {
			return res.status(401).json({
				process: false,
				message: "Access only for administrators"
			});
		}
	}
}

export default ClientController;
