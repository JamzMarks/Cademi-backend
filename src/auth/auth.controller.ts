import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  hello(): string{
    return 'hello'
  }
  // @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() user: AuthDto) {
    return this.authService.login(user.email, user.password)
  }
}
