import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { STATUS } from '../enum/status.enum';
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { SOFTWARES } from "../enum/softwares.enum";

@Schema({ timestamps: true })
export class Computer {
    @Prop({
        required: true,
        unique: true,
        type: String,
      })
    ref: string;

    @Prop({ required: true })
    brandName: string;
    
    @Prop({ required: true })
    model: string;

    @Prop({default: OS.WIN10, enum: OS, required: true})
    os: string;

    @Prop({default: TYPE.DESKTOP, type: String, enum: TYPE, required: true})
    type;

    @Prop({ required: true })
    cpu: string;
    
    @Prop({default: STATUS.RUNNING, type: String, enum: STATUS, required: true})
    status;




    @Prop({ required: true })
    usedBy: string;

    @Prop({ required: true })
    sessions: string[];

    @Prop({ required: true })
    softwares: SOFTWARES[];

    @Prop({ required: true })
    networkDriveAccess: string;

    @Prop({ required: true })
    group: string;
}
export const ComputerSchema = SchemaFactory.createForClass(Computer);
// ComputerSchema.index({ ref: 1 }, { unique: true });