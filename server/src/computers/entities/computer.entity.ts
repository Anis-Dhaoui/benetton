import { Document } from "mongoose";
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { STATUS } from "../enum/status.enum";
import { SOFTWARES } from "../enum/softwares.enum";

export interface IComputer extends Document {
    readonly ref: string;
    readonly brandName: string;
    readonly model: string;
    readonly type: TYPE;
    readonly usedBy: string;
    readonly status: STATUS;
    readonly sessions: string[];
    readonly softwares: SOFTWARES[];
}
