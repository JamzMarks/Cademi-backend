import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'src/database.config';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => databaseConfig()
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
