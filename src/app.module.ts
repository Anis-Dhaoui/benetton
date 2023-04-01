import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputersModule } from './computers/computers.module';

@Module({
  imports: [ComputersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
