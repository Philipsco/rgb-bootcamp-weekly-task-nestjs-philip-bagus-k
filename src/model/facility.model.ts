import {
  BelongsTo,
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ClinicFacility } from './clinic.facility.model';
import { Clinic } from './clinic.model';

@Table
export class Facility extends Model<Facility> {
  @Column
  name: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Clinic, () => ClinicFacility)
  clinics: Clinic[];
}
