import { Injectable } from '@nestjs/common';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';
import { IComputer } from './entities/computer.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ComputersService {
  constructor(@InjectModel('Computer') public computerModel: Model<IComputer>) { }

  async create(createComputerDto: CreateComputerDto): Promise<IComputer> {
    const newComputer = await new this.computerModel(createComputerDto);
    return newComputer.save();
  }


  // findAll() {
  //   return `This action returns all computers`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} computer`;
  // }

  // update(id: number, updateComputerDto: UpdateComputerDto) {
  //   return `This action updates a #${id} computer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} computer`;
  // }
}
