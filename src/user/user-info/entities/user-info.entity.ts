import { PrimaryIDColumn } from "src/decorators/id.decorator";
import { Entity, Column } from "typeorm";

@Entity()
export class UserInfo{

    @PrimaryIDColumn()
    id: string;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column()
    dateOfBirthday: Date
}