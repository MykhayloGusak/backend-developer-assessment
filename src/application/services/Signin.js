class Signin {
	constructor({ GetUserByName }) {
		this.GetUserByName = GetUserByName;
	}

	async loginFlow(username, password) {
		const userResult = await this.GetUserByName.get(username);
		if (userResult.length > 0) {
			//User does not have the password property but leaves the check ready for future modification
			//Change undefined to password
			if (userResult[0].password === undefined) {
				console.log(username + " is logged");
			} else {
				console.log("Incorrect password");
				return { message: "Incorrect password" };
			}
		} else {
			console.log("Unregistered username");
			return { message: "Unregistered username" };
		}
	}
}

export default Signin;
