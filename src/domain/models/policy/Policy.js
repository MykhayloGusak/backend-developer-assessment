import { attributes } from "structure";

var Policy = attributes({
	id: String,
	amountInsured: Number,
	email: Boolean,
	inceptionDate: Date,
	installmentPayment: Boolean,
	clientId: String
})(class Policy {});

export default Policy;
