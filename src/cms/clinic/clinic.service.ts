import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { json, Model } from 'sequelize';
import { Clinic } from 'src/model/clinic.model';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(Clinic) private readonly modelClinic: typeof Clinic,
  ) {}

  async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    const addData = await this.modelClinic.create<Clinic>(createClinicDto);
    return addData;
  }

  async findAll(): Promise<Clinic[]> {
    const data = await this.modelClinic.findAll();
    return data;
  }

  async findOne(id: number): Promise<Clinic> {
    const data = await this.modelClinic.findOne<Clinic>({ where: { id } });
    return data;
  }

  // async update(id: number, updateClinicDto: UpdateClinicDto): Promise<Clinic> {
  //   //const find = await this.modelClinic.findOne<Clinic>({ where: { id } });
  //   const updateData = await this.modelClinic.update<Clinic>(
  //     id,
  //     updateClinicDto,
  //   );
  //   return updateData;
  // }

  async remove(id: number) {
    const deleted = await this.modelClinic.destroy({ where: { id } });
    return deleted;
  }
}
