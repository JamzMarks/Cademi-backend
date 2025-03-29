import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserConfigModule } from './user-config/user-config.module';
import { UserInfoModule } from './user-info/user-info.module';
import { UserSecurityModule } from './user-security/user-security.module';


@Module({
  
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User]), 
    UserConfigModule, 
    UserInfoModule, 
    UserSecurityModule]
})
export class UserModule {}
