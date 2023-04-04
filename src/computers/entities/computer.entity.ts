import { Document } from "mongoose";
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { STATUS } from "../enum/status.enum";

export interface IComputer extends Document {
    readonly brandName: string;
    readonly model: string;
    readonly mac: string;
    readonly os: OS;
    readonly type: TYPE;
    readonly status: STATUS;
    readonly sessions: string[];
}
