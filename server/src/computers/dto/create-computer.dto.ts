import { ArrayMinSize, IsArray, IsEmpty, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { STATUS } from "../enum/status.enum";
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { SOFTWARES } from "../enum/softwares.enum";

export class CreateComputerDto {
    @IsString()
    readonly ref: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly brandName: string;

    @IsString()
    @MaxLength(50)
    @MinLength(2)
    readonly model: string;

    @IsEnum(OS)
    readonly os: string;

    @IsEnum(TYPE)
    readonly type: string;

    @IsString()
    @MaxLength(50)
    @MinLength(2)
    readonly cpu: string;

    @IsEnum(STATUS)
    readonly status: string;



    
    @IsString()
    @MaxLength(50)
    @MinLength(2)
    @IsNotEmpty()
    readonly usedBy: string;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(0)
    readonly sessions: string[];

    @IsArray()
    // @IsEnum(SOFTWARES, { each: true })
    @ArrayMinSize(0)
    readonly softwares: any[];

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(0)
    readonly networkDriveAccess: string[];

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly group: string;
}
