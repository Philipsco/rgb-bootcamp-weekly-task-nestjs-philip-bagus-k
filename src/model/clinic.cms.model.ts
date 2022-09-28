import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ClinicCMS extends Model<ClinicCMS> {
  @Column
  name: string;

  @Column
  address: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
