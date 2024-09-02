import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cats' })
export class Cat extends Model<Cat> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name: string;

  populate(catDto: Partial<Cat>): void {
    Object.assign(this, catDto);
  }
}
