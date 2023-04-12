import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<IComputer[]> {
    const computers = await this.computerModel.find().exec();

    if (!computers || computers.length == 0) {
      throw new NotFoundException('No data found!');
    }

    return computers;
  }

  async update(computerId: string, updateComputerDto: UpdateComputerDto) {
    const cmp = await this.computerModel.findByIdAndUpdate(computerId, updateComputerDto, { new: true });
    if (!cmp) {
      throw new NotFoundException(`Computer #${computerId} not found`);
    }
    return cmp;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} computer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} computer`;
  // }
}
