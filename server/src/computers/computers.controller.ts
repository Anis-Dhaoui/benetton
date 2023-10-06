import { Controller, Get, Post, Body, Put, Param, Delete, Res, Req, HttpStatus, Logger, Query, UseGuards } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';
import { RoleGuard } from 'src/auth/RBAC/verify-admin/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/RBAC/verify-admin/roles.decorator';

@Controller('computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) { }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async create(@Res() res, @Req() req, @Body() createComputerDto: CreateComputerDto) {

    try {
      const newCmp = await this.computersService.create(createComputerDto);
      return (
        res.status(HttpStatus.CREATED).json({
          message: 'Computer created',
          computer: newCmp
        })
      )
    } catch (err) {
      if (err && err.code == 11000) {
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          message: `Computer is already exists!`,
          error: 'Conflict'
        })
      }
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: err.statusCode,
        message: err.message,
        error: err.status
      });
    }
  }


  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAll() {
    return await this.computersService.findAll();
  }

  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':cmpId')
  async findOne(@Res() res, @Param('cmpId') cmpId: string) {
    try {
      const cmp = await this.computersService.findOne(cmpId);
      return res.status(HttpStatus.OK).json(cmp);
    } catch (err) {
      if (err.name == 'CastError') {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Conputer Not Found'
        });
      }
      return res.json(err.response);
    }
  }


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(':cmpId')
  async update(@Res() res, @Param('cmpId') cmpId: string, @Body() UpdateComputerDto: UpdateComputerDto) {
    try {
      const cmp = await this.computersService.update(cmpId, UpdateComputerDto);
      return res.status(HttpStatus.OK).json({
        message: 'Computer updated',
        cmp,
      });
    } catch (err) {
      if (err.name == 'CastError') {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Not Found'
        });
      }
      return res.json(err.response);
    }
  }


  @Roles('Admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':cmpId')
  async remove(@Res() res, @Param('cmpId') cmpId: string) {
    try {
      const deletedcomputer = await this.computersService.remove(cmpId);
      return res.status(HttpStatus.OK).json({
        message: 'Computer deleted',
        deletedcomputer,
      });
    } catch (err) {
      if (err.name == 'CastError') {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Not Found'
        });
      }
      return res.status(err.status).json(err.response);
    }
  }


  @UseGuards(JwtAuthGuard)
  @Get('/search')
  async search(@Res() res, @Req() req, @Query() query) {
    try {
      const fetchedData = await this.computersService.search(query);
      return res.status(HttpStatus.OK).json({
        message: 'Filtered data fetched',
        fetchedData
      })
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }
}
