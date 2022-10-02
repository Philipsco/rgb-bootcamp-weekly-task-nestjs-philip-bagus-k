import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Facility } from 'src/model/facility.model';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';

@Injectable()
export class FacilityService {
  constructor(
    @InjectModel(Facility) private readonly modelFacility: typeof Facility,
  ) {}

  async create(createFacilityDto: CreateFacilityDto): Promise<Facility> {
    const addData = await this.modelFacility.create<Facility>(
      createFacilityDto,
    );
    return addData;
  }

  async findAll(): Promise<Facility[]> {
    const data = await this.modelFacility.findAll();
    return data;
  }

  async findOne(id: number): Promise<Facility> {
    const data = await this.modelFacility.findOne<Facility>({ where: { id } });
    return data;
  }

  async update(id: number, updateFacilityDto: UpdateFacilityDto) {
    const updateData = await this.modelFacility.update(
      { ...updateFacilityDto },
      { where: { id }, returning: true },
    );
    return updateData;
  }

  async remove(id: number) {
    const deleted = await this.modelFacility.destroy({ where: { id } });
    return deleted;
  }
}
