import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClinicFacility } from 'src/model/clinic.facility.model';
import { CreateClinicFacilityDto } from './dto/create-clinic-facility.dto';
import { UpdateClinicFacilityDto } from './dto/update-clinic-facility.dto';

@Injectable()
export class ClinicFacilityService {
  constructor(
    @InjectModel(ClinicFacility)
    private readonly modelClinicFacility: typeof ClinicFacility,
  ) {}

  async create(
    createClinicFacilityDto: CreateClinicFacilityDto,
  ): Promise<ClinicFacility> {
    const addData = await this.modelClinicFacility.create<ClinicFacility>(
      createClinicFacilityDto,
    );
    return addData;
  }

  async findAll(): Promise<ClinicFacility[]> {
    const data = await this.modelClinicFacility.findAll();
    return data;
  }

  async findOne(id: number): Promise<ClinicFacility> {
    const data = await this.modelClinicFacility.findOne<ClinicFacility>({
      where: { id },
    });
    return data;
  }

  async update(id: number, updateClinicFacilityDto: UpdateClinicFacilityDto) {
    const updateData = await this.modelClinicFacility.update(
      { ...updateClinicFacilityDto },
      { where: { id }, returning: true },
    );
    return updateData;
  }

  async remove(id: number) {
    const deleted = await this.modelClinicFacility.destroy({ where: { id } });
    return deleted;
  }
}
