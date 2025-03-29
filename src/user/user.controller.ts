import { createUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async findAll(){
        return await this.userService.findAll()
    }

    @Get(':id')
    async findUserById(@Param('id') id: string){
        return await this.userService.findOne(id)
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string){
        return await this.userService.findByEmail(email)
    }

    @Post()
    async createUser(@Body() body: createUserDto){
        const user = await this.userService.create(body);
        return user;
    }

}
