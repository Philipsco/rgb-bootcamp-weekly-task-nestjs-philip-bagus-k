import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicFacilityDto } from './create-clinic-facility.dto';

export class UpdateClinicFacilityDto extends PartialType(
  CreateClinicFacilityDto,
) {
  readonly ClinicId: number;
  readonly FacilityId: number;
}
