import { attributes } from "structure";

const Client = attributes({
	id: String,
	name: String,
	email: String,
	role: String
})(class User {});

export default Client;
