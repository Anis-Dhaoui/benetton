import { ArrayMinSize, IsArray, IsEmpty, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { STATUS } from "../enum/status.enum";
import { OS } from "../enum/os.enum";
import { TYPE } from "../enum/type.enum";
import { SOFTWARES } from "../enum/softwares.enum";

export class CreateComputerDto {
    @IsString()
    readonly ref: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly brandName: string;

    @IsString()
    @MaxLength(30)
    @MinLength(3)
    readonly model: string;

    @IsEnum(OS)
    readonly os: string;

    @IsEnum(TYPE)
    readonly type: string;

    @IsString()
    @MaxLength(30)
    @MinLength(3)
    readonly cpu: string;

    @IsEnum(STATUS)
    readonly status: string;



    
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsNotEmpty()
    readonly usedBy: string;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    readonly sessions: string[];

    @IsArray()
    @IsEnum(SOFTWARES, { each: true })
    @ArrayMinSize(1)
    readonly softwares: SOFTWARES[];

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    readonly networkDriveAccess: string[];

    @IsString()
    @MaxLength(45)
    @IsNotEmpty()
    readonly group: string;
}
