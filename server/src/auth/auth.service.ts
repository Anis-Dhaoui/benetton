import { UsersService } from './../users/users.service';
import { IUser } from './../users/entities/user.entity';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) { }

  //$$$$$$$$$$$$$$$$$$// CHECK IF USER EXISTS WHEN TRYING TO AUTHENTICATE //$$$$$$$$$$$$$$$$$$//
  async getUser(query: object): Promise<IUser> {
    return this.userService.userModel.findOne(query, '+password -__v');
  }

  //$$$$$$$$$$$$$$$$$$// VALIDATE USERNAME AND PASSWORD //$$$$$$$$$$$$$$$$$$//
  async validateUser(username: string, password: string): Promise<any> {
    Logger.log('ValidateUser(username, password) METHOD INVOKDED');

    const user = await this.getUser({ username });
    if (!user) {
      throw new HttpException('No account belongs to this username', HttpStatus.NOT_FOUND);
    }

    const passwordValid = await bcrypt.compare(password, user.password)
    Logger.warn(passwordValid);

    if (!passwordValid) {
      throw new HttpException('Incorrect password!', HttpStatus.UNAUTHORIZED);
    }

    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  //$$$$$$$$$$$$$$$$$$// SIGNIN //$$$$$$$$$$$$$$$$$$//
  async login(user: IUser) {
    const payload = { username: user.username, sub: user._id };
    const userWithoutPassword = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      role: user.role
    }
    return {
      user: userWithoutPassword,
      access_token: this.jwtService.sign(payload),
    };
  }
}
