import { IDColumn, PrimaryIDColumn } from "src/decorators/id.decorator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryIDColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @IDColumn()
    configId: string;

    @IDColumn()
    securityId: string;

    @IDColumn()
    userInfoId: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    lastUpdate: Date;
}