import jwt from "jsonwebtoken";

class Signin {
	constructor({ config, GetUserByName }) {
		this.config = config;
		this.GetUserByName = GetUserByName;
	}

	async loginFlow(username, password) {
		const userResult = await this.GetUserByName.get(username);
		if (userResult.length > 0) {
			//User does not have the password property but leaves the check ready for future modification
			//Change undefined to password
			if (userResult[0].password === undefined) {
				//Build token data
				const dataPayload = {
					id: userResult[0].id,
					name: userResult[0].name,
					email: userResult[0].email,
					role: userResult[0].role
				};
				//Generate token
				const generateToken = jwt.sign(
					dataPayload,
					this.config.SECRETSTRING,
					{
						expiresIn: "1h"
					}
				);
				console.log(username + " has been correctly identified");
				return {
					process: true,
					message: username + " has been correctly identified",
					token: generateToken
				};
			} else {
				console.log("Incorrect password");
				return {
					process: false,
					message: "Incorrect password"
				};
			}
		} else {
			console.log("Unregistered username");
			return {
				process: false,
				message: "Unregistered username"
			};
		}
	}
}

export default Signin;
