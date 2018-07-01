import { attributes } from "structure";

// With the help of the structure library, a simple template
// is created to validate the entries. When connecting to a
// database manager you can use the utilities to create models.
// ORM can be sequelize or objection.js

var Policy = attributes({
	id: String,
	amountInsured: Number,
	email: Boolean,
	inceptionDate: Date,
	installmentPayment: Boolean,
	clientId: String
})(
	class Policy {
		// You can create functions for carrying out transactions with the data
	}
);

export default Policy;
