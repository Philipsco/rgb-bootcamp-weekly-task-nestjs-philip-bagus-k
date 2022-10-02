import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ClinicFacility } from './clinic.facility.model';
import { Facility } from './facility.model';

@Table
export class Clinic extends Model<Clinic> {
  @Column
  name: string;

  @Column
  address: string;

  @Column
  image: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Facility, () => ClinicFacility)
  facilities!: Array<Facility & { clinicFacility: ClinicFacility }>;
}
