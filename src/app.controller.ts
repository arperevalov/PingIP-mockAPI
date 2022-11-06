import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './common/guards/local-auth.guard';
import { Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/v1/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
