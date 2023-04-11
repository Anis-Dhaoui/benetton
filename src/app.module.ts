import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputersModule } from './computers/computers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'management' }),

    ComputersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
