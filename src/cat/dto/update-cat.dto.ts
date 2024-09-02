import { PartialType } from '@nestjs/mapped-types';
import { CatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CatDto) {}
