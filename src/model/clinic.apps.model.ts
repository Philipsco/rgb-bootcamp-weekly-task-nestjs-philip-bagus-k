import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ClinicApps extends Model<ClinicApps> {
  @Column
  name: string;

  @Column
  address: string;
}
