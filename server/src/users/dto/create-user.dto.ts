import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ROLES } from "../enum/roles.enum";

export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(ROLES)
    readonly role: ROLES;
}


export class updatePasswordDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly currentPassword: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly newPassword: string;
}

export class resetPasswordDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly newPassword: string;
}