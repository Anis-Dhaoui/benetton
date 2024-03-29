import { Controller, Get, Body, Param, Res, HttpStatus, Put, UseGuards, Delete, Post, Req, HttpException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto, resetPasswordDto, updatePasswordDto } from './dto/create-user.dto';
import { OwnerGuard } from './../auth/RBAC/verify-owner/owner.guard';
import { Roles } from './../auth/RBAC/verify-admin/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/RBAC/verify-admin/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //$$$$$$$$$$$$$$$$$$$$$$$$// FETCH ALL USERS  //$$$$$$$$$$$$$$$$$$$$$$$$//
  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/')
  async findAll(@Res() res) {
    try {
      const users = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Fetched all users successfully',
        users: users
      })
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }


  @Roles('Admin', 'User')
  @UseGuards(JwtAuthGuard, RoleGuard, OwnerGuard)
  @Get(':userId')
  async findOne(@Res() res, @Param('userId') userId: string) {
    try {
      const user = await this.usersService.findOneUser(userId);
      return res.status(HttpStatus.OK).json({
        message: `User ${user.firstName} fetched successfully`,
        user: user
      })
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('/register')
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersService.register(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'Account created successfully',
        createdUser: newUser
      });
    } catch (error) {
      if (error && error.keyPattern.username == 1) {
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          message: `Username: "${error.keyValue.username}" is already exist`,
        })
      }

      return res.status(error.status).json(error.response);
    }
  }


  //$$$$$$$$$$$$$$$$$$$$$$$$// REMOVE SPECICIFIC USER  //$$$$$$$$$$$$$$$$$$$$$$$$//
  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':userId')
  async remove(@Req() req, @Res() res, @Param('userId') userId: string) {
    try {
      if (!req.user._id.equals(userId)) {
        const deletedUser = await this.usersService.remove(userId);
        return res.status(HttpStatus.OK).json({
          message: `User "${deletedUser.username}" deleted successfully`,
          deletedUser: deletedUser
        })
      } else {
        throw new UnauthorizedException('Cannot remove your own account, use different account');
      }
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Roles('Admin', 'User')
  @UseGuards(JwtAuthGuard, RoleGuard, OwnerGuard)
  @Put(':userId')
  async update(@Req() req, @Res() res, @Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {

    try {
      if ((req.user._id.equals(userId) && updateUserDto.role == undefined) || (!req.user._id.equals(userId) && updateUserDto.role == undefined) || (!req.user._id.equals(userId) && updateUserDto.role != undefined)) {
        const updatedUser = await this.usersService.update(userId, updateUserDto);
        return res.status(HttpStatus.OK).json({
          message: `User "${updatedUser.username}" updated successfully`,
          updatedUser: updatedUser
        })
      } else {
        throw new UnauthorizedException('Cannot downgrade your own role, use different account');
      }

    } catch (error) {
      if (error && error.keyPattern && error.keyPattern.username == 1) {
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          message: `Error: ${error.keyValue.username} is already exist`,
          error: 'Conflict'
        })
      }
      return res.status(error.status).json(error.response);
    }
  }

  @Roles('Admin', 'User')
  @UseGuards(JwtAuthGuard, RoleGuard, OwnerGuard)
  @Put(':userId/updatepassword')
  async updatePassword(@Res() res, @Param('userId') userId: string, @Body() updatePasswordDto: updatePasswordDto) {
    try {
      const updatedUser = await this.usersService.updatePassword(userId, updatePasswordDto);
      return res.status(HttpStatus.OK).json({
        message: `User "${updatedUser.username}" password updated successfully`,
        updatedUser: updatedUser
      })
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: error.status,
        message: `Error: ${error.response}`
      })
    }
  }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(':userId/resetpassword')
  async resetPassword(@Res() res, @Param('userId') userId: string, @Body() resetPasswordDto: resetPasswordDto) {
    try {
      const updatedUser = await this.usersService.resetPassword(userId, resetPasswordDto);
      return res.status(HttpStatus.OK).json({
        message: `User "${updatedUser.username}" password updated successfully`,
        updatedUser: updatedUser
      })
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: error.status,
        message: `Error: ${error.response}`
      })
    }
  }
}