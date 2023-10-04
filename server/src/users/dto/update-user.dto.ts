import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {}