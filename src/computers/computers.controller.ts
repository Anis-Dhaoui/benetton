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

  @Put(':computerId')
  async update(@Param('computerId') computerId: string, @Res() res, @Body() updateComputerDto: UpdateComputerDto) {
    try {
      const computer = await this.computersService.update(computerId, updateComputerDto);
      return res.status(HttpStatus.OK).json({
        message: 'Computer updated',
        computer,
      });
    } catch (err) {
      // return res.status(err.status).json(err.response);
      Logger.warn(err)
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.computersService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.computersService.remove(+id);
  // }
}
