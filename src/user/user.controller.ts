import { createUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Post('/signup')
    async createUser(@Body() body: createUserDto){
        const user = await this.userService.create(body);
        return user;
    }
    
    @Get('/test')
    teste(){
        return 'Salve'
    }
}
