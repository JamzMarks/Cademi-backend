
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, Transaction } from 'typeorm';
import { createUserDto } from './dtos/create-user.dto';

import { UserSecurityService } from './user-security/user-security.service';
import { UserConfigService } from './user-config/user-config.service';
import { UserInfoService } from './user-info/user-info.service';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private repo: Repository<User>,
        private configService: UserConfigService,
        private securityService: UserSecurityService,
        private userInfoService: UserInfoService
    ){}


    async create(data: createUserDto){
        const {userConfig, userInfo, userSecurity} = data

        const user = this.repo.create({email: data.email, password: data.password});
        
        return await this.repo.manager.transaction(async (transactionalEntityManager) => {

            // Cria as entidades relacionadas dentro da transação
            const userConfigData = await this.configService.create(userConfig,transactionalEntityManager);
            const userSecurityData = await this.securityService.create(userSecurity, transactionalEntityManager);
            const userInfoData = await this.userInfoService.create(userInfo, transactionalEntityManager);

            // Associa as entidades relacionadas ao usuário
            user.configId = userConfigData.id;
            user.securityId = userSecurityData.id;
            user.userInfoId = userInfoData.id;

            // Salva o usuário dentro da mesma transação
            return await transactionalEntityManager.save(User, user);
        });
    }
}
