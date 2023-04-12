import { Controller, Get, Post, Body, Put, Param, Delete, Res, Req, HttpStatus, Logger } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';

@Controller('computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) {}

  @Post()
  async create(@Res() res, @Req() req, @Body() createComputerDto: CreateComputerDto) {

    try {
      const newCmp = await this.computersService.create(createComputerDto);
      return(
        res.status(HttpStatus.CREATED).json({
          message: 'Computer has been created successfully',
          computer: newCmp
        }) 
      )
    } catch (err) {
      if (err && err.code == 11000) {
        return res.status(HttpStatus.CONFLICT).json({
          statusCode: 409,
          message: `Error: This MAC address belongs to another computer!`,
          error: 'Conflict'
        })
      }
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Quote could not be added!',
        error: 'Bad Request'
      });
    }
  }

  @Get()
  async findAll() {
    return await this.computersService.findAll();
  }

  @Put(':cmpId')
  async update(@Res() res, @Param('cmpId') cmpId: string, @Body() UpdateComputerDto: UpdateComputerDto) {
    try {
      const cmp = await this.computersService.update(cmpId, UpdateComputerDto);
      return res.status(HttpStatus.OK).json({
        message: 'Computer updated',
        cmp,
      });
    } catch (err) {
      if(err.name == 'CastError'){
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Not Found'
        });
      }
      return res.json(err.response);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.computersService.findOne(+id);
  // }

  @Delete(':cmpId')
  async remove(@Res() res, @Param('cmpId') cmpId: string) {
    try {
      const deletedcomputer = await this.computersService.remove(cmpId);
      return res.status(HttpStatus.OK).json({
        message: 'Computer deleted',
        deletedcomputer,
      });
    } catch (err) {
      if(err.name == 'CastError'){
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          error: 'Not Found'
        });
      }
      return res.status(err.status).json(err.response);
    }
  }
}
