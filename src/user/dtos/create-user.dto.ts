import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateUserInfoDto } from "../user-info/dto/create-user-info.dto";
import { Type } from "class-transformer";
import { CreateUserConfigDto } from "../user-config/dto/create-user-config.dto";
import { CreateUserSecurityDto } from "../user-security/dto/create-user-security.dto";

export class createUserDto{

    @IsEmail({}, { message: 'Invalid email' })
    email: string;

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @MinLength(8, { message: 'Password must contain at least 8 characters'})
    @IsString()
    password: string;

    @ValidateNested()
    @Type(() => CreateUserInfoDto)
    userInfo: CreateUserInfoDto;

    @ValidateNested()
    @Type(() => CreateUserConfigDto)
    userConfig: CreateUserConfigDto;

    @ValidateNested()
    @Type(() => CreateUserSecurityDto)
    userSecurity: CreateUserSecurityDto;
}