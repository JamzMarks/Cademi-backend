import { PrimaryIDColumn } from "src/decorators/id.decorator";
import { Column, Entity } from "typeorm";

@Entity()
export class UserConfig{
    @PrimaryIDColumn()
    id: string;

    @Column({ default: 'English' })
    language: string;

}