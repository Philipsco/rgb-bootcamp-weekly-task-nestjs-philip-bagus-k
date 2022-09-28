import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { json, Model } from 'sequelize';
import { ClinicCMS } from 'src/model/clinic.cms.model';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(ClinicCMS) private readonly modelClinic: typeof ClinicCMS,
  ) {}

  async create(createClinicDto: CreateClinicDto): Promise<ClinicCMS> {
    const addData = await this.modelClinic.create<ClinicCMS>(createClinicDto);
    return addData;
  }

  async findAll(): Promise<ClinicCMS[]> {
    const data = await this.modelClinic.findAll();
    return data;
  }

  async findOne(id: number): Promise<ClinicCMS> {
    const data = await this.modelClinic.findOne<ClinicCMS>({ where: { id } });
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
