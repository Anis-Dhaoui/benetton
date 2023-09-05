import { Document } from "mongoose";
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { STATUS } from "../enum/status.enum";
import { SOFTWARES } from "../enum/softwares.enum";

export interface IComputer extends Document {
    readonly ref: string;
    readonly brandName: string;
    readonly model: string;
    readonly os: OS;
    readonly type: TYPE;
    readonly cpu: string;
    readonly status: STATUS;



    readonly usedBy: string;
    readonly sessions: string[];
    readonly softwares: any[];
    readonly networkDriveAccess: string[];
    readonly group: string;
}
