import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') public userModel: Model<IUser>) { }

  async findAll(): Promise<IUser[]> {
    const userData = await this.userModel.find({}, ['-__v']);
    if (!userData || userData.length == 0) {
      throw new NotFoundException('User data not found');
    }

    return userData;
  }

  async findOneUser(id: string): Promise<IUser> {
    const user = await this.userModel.findById(id, ['-__v']).exec();
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  //$$$$$$$$$$$$$$$$$$// REGISTER NEW USER //$$$$$$$$$$$$$$$$$$//
  async register(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }


  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return deletedUser;
  }

  async update(id: string, updateUserDto: any): Promise<IUser> {
    if (updateUserDto.newPassword) {
      const user = await this.userModel.findById(id, ['+password', '-firstName', '-lastName', '-username', '-role', '-__v']);
      if (user) {
        const isPasswordValid = await bcrypt.compare(updateUserDto.currentPassword, user.password);
        if (!isPasswordValid) {
          throw new HttpException('Current password is incorrect!', HttpStatus.UNAUTHORIZED);
        } else {
          const hashNewPassword = await bcrypt.hash(updateUserDto.newPassword, 10);
          updateUserDto.password = hashNewPassword;
        }
      }
    }

    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
}
