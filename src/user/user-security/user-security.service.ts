import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSecurity } from './entities/user-security.entity';
import { CreateUserSecurityDto } from './dto/create-user-security.dto';

@Injectable()
export class UserSecurityService {
  constructor(@InjectRepository(UserSecurity) private repo: Repository<UserSecurity>){}

  async create(userSecurityData: Partial<CreateUserSecurityDto>, transactionalEntityManager: EntityManager): Promise<UserSecurity> {
      const userSecurity = this.repo.create(userSecurityData);
      
      if (transactionalEntityManager) {
        return await transactionalEntityManager.save(UserSecurity, userSecurity);
      }
      return userSecurity;
    }
    
  findAll() {
    return `This action returns all userSecurity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSecurity`;
  }

  // update(id: number, updateUserSecurityDto: UpdateUserSecurityDto) {
  //   return `This action updates a #${id} userSecurity`;
  // }

  remove(id: number) {
    return `This action removes a #${id} userSecurity`;
  }
}
