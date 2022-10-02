import { IsNotEmpty } from 'class-validator';
import { Column, Table } from 'sequelize-typescript';

@Table
export class AuthCredentialDto {
  @IsNotEmpty()
  @Column
  name: string;

  @IsNotEmpty()
  @Column
  username: string;

  @IsNotEmpty()
  @Column
  password: string;
}
