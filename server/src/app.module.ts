import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputersModule } from './computers/computers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path/posix';

@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'benettonDB'}),

    ComputersModule,

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
