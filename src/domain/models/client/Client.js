// When connecting to adatabase manager you can use the utilities to create models.
// ORM can be sequelize or objection.js. The models also allow to check the data
// with which they are created to avoid type errors.
class Client {
	constructor(id, name, email, role) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.role = role;
	}

	// You can create functions for carrying out transactions with the data
	toJSON() {
		return {
			id: this.id,
			name: this.name,
			email: this.email,
			role: this.role
		};
	}
}
export default Client;
