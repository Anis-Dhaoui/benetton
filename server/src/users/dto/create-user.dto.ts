import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @MaxLength(40)
    @IsEmail()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly password: string;
}
