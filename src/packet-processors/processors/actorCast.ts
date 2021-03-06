import { BufferReader } from "../../buffer-reader";
import { ActorCast } from "../../definitions/ActorCast";

export function actorCast(reader: BufferReader): ActorCast {
	return {
		actionID: reader.nextUInt16(),
		skillType: {
			0x1: "Normal",
			0x2: "ItemAction",
			0xD: "MountSkill",
		}[reader.nextUInt8()],
		castTime: reader.skip(5).nextFloat(),
		targetID: reader.nextUInt32(),
		rotation: reader.nextFloat(),
		pos: reader.nextPosition3UInt16(),
	};
}
