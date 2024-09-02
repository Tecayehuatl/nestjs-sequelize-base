import { Injectable } from '@nestjs/common';
import { CatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Response } from 'express';
import { Cat } from './model/cats.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat)
    private readonly catModel: typeof Cat,
  ) {}

  async create(createCatDto: CatDto): Promise<Cat> {
    const myCat = new Cat();
    myCat.populate(createCatDto);
    await myCat.save();
    return myCat;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
