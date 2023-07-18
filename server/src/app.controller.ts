import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
// import path, { join } from 'path';
import { pathToFileURL } from 'url';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res) {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  }
}
