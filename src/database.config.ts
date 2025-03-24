import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'sqlite', // Tipo de banco de dados
    database: 'db.sqlite',
    // entities: [User, UserConfig, userSecurity], // Entidades
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entidades
    synchronize: true, // Mudar para falso quando user bando de testes
})

export const databaseConfig = (): TypeOrmModuleOptions  => {
    if(process.env.NODE_ENV === 'production'){
        console.log('Ambiente de producao')
        return{
            type: 'postgres',
            host: process.env.DB_HOST_PROD,
            port: Number(process.env.DB_PORT_PROD),
            username: process.env.DB_USER_PROD,
            password: process.env.DB_PASS_PROD,
            database: process.env.DB_NAME_PROD,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
            migrations: [__dirname + '/../migrations/*.ts'],
            autoLoadEntities: true,
        }
    }
    console.log('passou por aqui')
    return{
        type: 'sqlite',
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
    }
}