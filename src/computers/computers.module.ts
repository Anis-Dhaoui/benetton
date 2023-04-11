import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ComputerSchema } from './schema/computer.shcema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Computer', schema: ComputerSchema }]) // Setup the mongoose module to use the Computer schema
  ],
  controllers: [ComputersController],
  providers: [ComputersService],
  exports: [
    ComputersService,
  ]
})
export class ComputersModule {}
