import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Without the following line DTO will never work
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: '*',
      exposedHeaders: '*',
      credentials: true,
    }
  );

  await app.listen(5000, () =>{
    Logger.log(`Server is Running at port: 5000.`)
  });
}
bootstrap();
