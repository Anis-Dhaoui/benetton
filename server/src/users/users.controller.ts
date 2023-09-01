import { Controller, Get, Body, Param, Res, HttpStatus, Put, UseGuards, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
// import { OwnerGuard } from './../auth/RBAC/verify-owner/owner.guard';
// import { Roles } from './../auth/RBAC/verify-admin/roles.decorator';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RoleGuard } from 'src/auth/RBAC/verify-admin/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //$$$$$$$$$$$$$$$$$$$$$$$$// FETCH ALL USERS  //$$$$$$$$$$$$$$$$$$$$$$$$//
  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('allusers')
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


  // @Roles('Admin', 'User')
  // @UseGuards(JwtAuthGuard, RoleGuard, OwnerGuard)
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


  //$$$$$$$$$$$$$$$$$$$$$$$$// REMOVE SPECICIFIC USER  //$$$$$$$$$$$$$$$$$$$$$$$$//
  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('/allusers/:userId')
  async remove(@Res() res, @Param('userId') userId: string) {
    try {
      const deletedUser = await this.usersService.remove(userId);
      return res.status(HttpStatus.OK).json({
        message: `User ${deletedUser._id} deleted successfully`,
        deletedUser: deletedUser
      })
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  // @Roles('Admin', 'User')
  // @UseGuards(JwtAuthGuard, RoleGuard, OwnerGuard)
  @Put(':userId')
  async update(@Res() res, @Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.usersService.update(userId, updateUserDto);
      return res.status(HttpStatus.OK).json({
        message: `User ${updatedUser._id} updated successfully`,
        updatedUser: updatedUser
      })
    } catch (error) {
      if (error && error.keyPattern.email == 1) {
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          message: `Error: ${error.keyValue.email} belongs to other account`,
          error: 'Conflict'
        })
      }
      return res.status(error.status).json(error.response);
    }
  }
}