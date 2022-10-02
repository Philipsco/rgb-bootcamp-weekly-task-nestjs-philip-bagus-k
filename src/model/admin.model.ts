import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Admin extends Model<Admin> {
  @Column
  name: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
