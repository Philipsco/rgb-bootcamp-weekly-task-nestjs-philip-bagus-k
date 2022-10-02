import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicDto } from './create-clinic.dto';

export class UpdateClinicDto extends PartialType(CreateClinicDto) {
  readonly name: string;
  readonly address: string;
  readonly image: string;
  readonly isActive: boolean;
}
