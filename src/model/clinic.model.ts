import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Clinic extends Model {
  @Column
  name: string;

  @Column
  address: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
