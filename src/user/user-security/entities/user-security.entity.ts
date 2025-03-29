import { PrimaryIDColumn } from "src/decorators/id.decorator";
import { Entity, Column } from "typeorm";

@Entity()
export class UserSecurity{

    @PrimaryIDColumn()
    id: string;

    @Column({ nullable: true })
    secondaryEmail: string;

    @Column({ nullable: true })
    phone: string;

}