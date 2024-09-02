import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

const databaseSettings: SequelizeModuleOptions = {
  dialect: process.env.DIALECT as Dialect,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  autoLoadModels: true,
  sync: {
    alter: false,
  },
  define: {
    timestamps: false,
  },
};

@Module({
  imports: [CatModule, SequelizeModule.forRoot(databaseSettings)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
