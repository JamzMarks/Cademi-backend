import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { UserInfo } from './entities/user-info.entity';

@Injectable()
export class UserInfoService {
  constructor(@InjectRepository(UserInfo) private repo: Repository<UserInfo>){}

  async create(userInfoData: Partial<CreateUserInfoDto>, transactionalEntityManager?: EntityManager): Promise<UserInfo> {
    const userInfo = this.repo.create(userInfoData);
    
    if (transactionalEntityManager) {
      return await transactionalEntityManager.save(UserInfo, userInfo);
    }
    return userInfo;
  }

  findAll() {
    return `This action returns all userInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfo`;
  }

  // update(id: number, updateUserInfoDto:   ) {
  //   return `This action updates a #${id} userInfo`;
  // }

  remove(id: number) {
    return `This action removes a #${id} userInfo`;
  }
}
