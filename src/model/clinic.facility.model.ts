import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Clinic } from './clinic.model';
import { Facility } from './facility.model';

@Table
export class ClinicFacility extends Model<ClinicFacility> {
  @PrimaryKey
  @NotEmpty
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Clinic)
  @Column
  ClinicId: number;

  @ForeignKey(() => Facility)
  @Column
  FacilityId: number;
}
