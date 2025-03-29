
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, Transaction } from 'typeorm';
import { createUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

import { UserSecurityService } from './user-security/user-security.service';
import { UserConfigService } from './user-config/user-config.service';
import { UserInfoService } from './user-info/user-info.service';
import { NotFoundError } from 'rxjs';


const saltRounds = 12;
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private repo: Repository<User>,
        private configService: UserConfigService,
        private securityService: UserSecurityService,
        private userInfoService: UserInfoService
    ){}


    async create(data: createUserDto){
        const {email, password, userConfig, userInfo, userSecurity} = data;
        const existingUser = await this.repo.findOne({where: {email}});
        if(existingUser){
            throw new BadRequestException('E-mail already in use');
        }

        return await this.repo.manager.transaction(async (transactionalEntityManager) => {

            const hash = await bcrypt.hash(password, saltRounds);
            const user = this.repo.create({email, password: hash});

            const [userConfigData, userSecurityData, userInfoData] = await Promise.all([
                this.configService.create(userConfig, transactionalEntityManager),
                this.securityService.create(userSecurity, transactionalEntityManager),
                this.userInfoService.create(userInfo, transactionalEntityManager),
            ])
            
            // Associação dos IDs das entidades relacionadas
            user.configId = userConfigData.id;
            user.securityId = userSecurityData.id;
            user.userInfoId = userInfoData.id;

            // Salva o usuário dentro da mesma transação
            return await transactionalEntityManager.save(User, user);
        });      
    }

    async findOne(id: string): Promise<User>{
        const result = await this.repo.findOne({where: {id}})
        if(!result){
            throw new NotFoundException(`User with ID ${id} not found`); 
        }
        return result
    }
    async findByEmail(email: string): Promise<User>{
        const result = await this.repo.findOne({where: {email}})
        if(!result){
            throw new NotFoundException(`User with email ${email} not found`); 
        }
        return result
    }

    async findAll(){
        const result = await this.repo.find()
        if(result.length === 0){
            throw new NotFoundException(`Users not found`); 
        }
        return result
    }
}
