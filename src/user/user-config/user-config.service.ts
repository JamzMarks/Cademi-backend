import { Injectable } from '@nestjs/common';
import { CreateUserConfigDto } from './dto/create-user-config.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConfig } from './entities/user-config.entity';

@Injectable()
export class UserConfigService {

  constructor(@InjectRepository(UserConfig) private repo: Repository<UserConfig>){}
  
  async create(userConfigData: Partial<CreateUserConfigDto>, transactionalEntityManager?: EntityManager): Promise<UserConfig> {
    const userConfig = this.repo.create(userConfigData);
    
    if (transactionalEntityManager) {
      return await transactionalEntityManager.save(UserConfig, userConfig);
    }
    return userConfig;
  }

  findAll() {
    return `This action returns all userConfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userConfig`;
  }

  // update(id: number, updateUserConfigDto: UpdateUserConfigDto) {
  //   return `This action updates a #${id} userConfig`;
  // }

  remove(id: number) {
    return `This action removes a #${id} userConfig`;
  }
}
