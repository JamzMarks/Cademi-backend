import { IsDate, IsString } from "class-validator";

export class CreateUserInfoDto {

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsDate()
    dateOfBirthday: Date
}
