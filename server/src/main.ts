import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Without the following line DTO will never work
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["http://192.168.213.128:5001", "http://localhost:5001"]
  });
  await app.listen(5000);
}
bootstrap();
