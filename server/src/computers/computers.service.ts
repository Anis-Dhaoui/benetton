import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

  async findOne(cmpId: string): Promise<IComputer>{
    const cmp = await this.computerModel.findById(cmpId);
    if(!cmp){
      throw new NotFoundException('No data found');
    }
    return cmp;
  }

  async update(computerId: string, updateComputerDto: UpdateComputerDto) {
    const cmp = await this.computerModel.findByIdAndUpdate(computerId, updateComputerDto, { new: true });
    if (!cmp) {
      throw new NotFoundException(`Computer #${computerId} not found`);
    }
    return cmp;
  }

  async remove(cmpId: string): Promise<IComputer> {
    const deletedComputer = await this.computerModel.findByIdAndDelete(cmpId);
    if (!deletedComputer) {
      throw new NotFoundException(`Computer #${cmpId} not found`);
    }
    return deletedComputer;
  }
// { softwares: { $in: [query.soft] }, ref: query.ref, usedBy: query.usedBy, status: query.status}
// Model.find({ $and: [ { condition1 }, { $or: [ { condition2 }, { condition3 } ] } ] });

  async search(query: any): Promise<IComputer[]>{
    const customQuery = Object.fromEntries(Object.entries(query).filter(([key, value]) => key !== 'soft' && key !== 'session'));
    Logger.warn(query)
    Logger.log(customQuery)
    // const computers = await this.computerModel.find({ softwares: { $in: [query.soft] }}).exec();
    let computers: IComputer[] = [];
    if(!query.ref){
      computers = await this.computerModel.find({ $and:[ { softwares: { $in: [query.soft] }}, { sessions: { $in: [{}] }}, customQuery ] }).exec();
    }
    // const computers = await this.computerModel.find({
    //   $and: [
    //     {query.sof ? {softwares: { $in: [query.soft]}} : {}},
    //     {$or: [{ref: query.ref}, {}]}
    //   ]
    // })
    if(!computers || computers.length == 0){
      throw new NotFoundException("No data found");
    }
    return computers;
  }
}