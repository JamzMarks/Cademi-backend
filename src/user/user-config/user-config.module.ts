import { Module } from '@nestjs/common';
import { UserConfigService } from './user-config.service';
import { UserConfigController } from './user-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConfig } from './entities/user-config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserConfig])],
  controllers: [UserConfigController],
  providers: [UserConfigService],
  exports: [UserConfigService]
})
export class UserConfigModule {}
