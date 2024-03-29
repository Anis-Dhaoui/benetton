import { ROLES } from '../enum/roles.enum';
import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly role: ROLES;
}
