import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { STATUS } from '../enum/status.enum';
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";

@Schema({ timestamps: true })
export class Computer {
    @Prop()
    brandName: string;
    
    @Prop()
    model: string;

    @Prop()
    mac: string;

    @Prop({default: OS.WIN10, enum: OS})
    os: string;

    @Prop({default: TYPE.DESKTOP, type: String, enum: TYPE})
    type;

    @Prop({default: STATUS.RUNNING, type: String, enum: STATUS})
    status;

    @Prop()
    sessions: string[];

    @Prop()
    usedBy: string;
}
export const ComputerSchema = SchemaFactory.createForClass(Computer);
// Condition for usedBy and mac (together) must be unique 
ComputerSchema.index({ usedBy: 1, mac: 1 }, { unique: true });
