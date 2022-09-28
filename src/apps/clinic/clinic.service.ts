import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClinicApps } from 'src/model/clinic.apps.model';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(ClinicApps) private readonly modelClinic: typeof ClinicApps,
  ) {}

  async create(createClinicDto: CreateClinicDto): Promise<ClinicApps> {
    const addData = await this.modelClinic.create<ClinicApps>(createClinicDto);
    return addData;
  }

  async findAll(): Promise<ClinicApps[]> {
    const data = await this.modelClinic.findAll();
    return data;
  }

  async findOne(id: number): Promise<ClinicApps> {
    const data = await this.modelClinic.findOne<ClinicApps>({ where: { id } });
    return data;
  }

  async update(id: number, updateClinicDto: UpdateClinicDto) {
    const updateData = await this.modelClinic.update(
      { ...updateClinicDto },
      { where: { id }, returning: true },
    );
    return updateData;
  }

  async remove(id: number) {
    const deleted = await this.modelClinic.destroy({ where: { id } });
    return deleted;
  }
}