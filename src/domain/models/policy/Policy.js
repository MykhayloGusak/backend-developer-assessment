import { attributes } from "structure";

const Policy = attributes({
	id: String,
	amountInsured: Number,
	email: String,
	inceptionDate: Date,
	installmentPayment: Boolean,
	clientId: String
})(class Policy {});

export default Policy;
