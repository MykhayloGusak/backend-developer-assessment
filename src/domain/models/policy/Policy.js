// When connecting to adatabase manager you can use the utilities to create models.
// ORM can be sequelize or objection.js. The models also allow to check the data
// with which they are created to avoid type errors
class Policy {
	constructor(
		id,
		amountInsured,
		email,
		inceptionDate,
		installmentPayment,
		clientId
	) {
		this.id = id;
		this.amountInsured = amountInsured;
		this.email = email;
		this.inceptionDate = inceptionDate;
		this.installmentPayment = installmentPayment;
		this.clientId = clientId;
	}

	// You can create functions for carrying out transactions with the data
	toJSON() {
		return {
			id: this.id,
			amountInsured: this.amountInsured,
			email: this.email,
			inceptionDate: this.inceptionDate,
			installmentPayment: this.installmentPayment,
			clientId: this.clientId
		};
	}
}

export default Policy;
