import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersClient } from './client.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PassportModule, HttpModule],
  controllers: [AuthController],
  providers: [AuthService, UsersClient, LocalStrategy],
})
export class AuthModule {}
