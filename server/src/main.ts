import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Without the following line DTO will never work
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(5000, '192.168.213.128', () =>{
    Logger.log(`Server is Running at port: 5000, and host: 192.168.213.128`)
  });
}
bootstrap();
