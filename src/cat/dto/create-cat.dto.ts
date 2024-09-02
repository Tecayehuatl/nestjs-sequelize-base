import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CatDto {
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
