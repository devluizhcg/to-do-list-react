import { UUID, V7Generator } from "uuidv7";

class Uuid7Generate {
	generateV7(): UUID {
		return new V7Generator().generate();
	}
}

export default new Uuid7Generate();
