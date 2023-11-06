import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
// import path, { join } from 'path';
import { pathToFileURL } from 'url';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(['/', '/home', '/profile', '/users_management'])
  index(@Res() res) {
    const absolutePath = path.resolve(__dirname, '../build/index.html');
    res.sendFile(absolutePath);
  }
}
