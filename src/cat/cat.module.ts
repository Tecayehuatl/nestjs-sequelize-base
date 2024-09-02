import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './model/cats.model';

@Module({
  controllers: [CatController],
  imports: [SequelizeModule.forFeature([Cat])],
  providers: [CatService],
})
export class CatModule {}
