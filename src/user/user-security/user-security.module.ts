import { Module } from '@nestjs/common';
import { UserSecurityService } from './user-security.service';
import { UserSecurityController } from './user-security.controller';
import { UserSecurity } from './entities/user-security.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSecurity])],
  controllers: [UserSecurityController],
  providers: [UserSecurityService],
  exports: [UserSecurityService]
})
export class UserSecurityModule {}
