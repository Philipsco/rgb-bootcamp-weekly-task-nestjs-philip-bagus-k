import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinic.model';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(Clinic) private readonly modelClinic: typeof Clinic,
  ) {}

  async findAll(): Promise<Clinic[]> {
    const data = await this.modelClinic.findAll();
    return data;
  }

  async findOne(id: number): Promise<Clinic> {
    const data = await this.modelClinic.findOne<Clinic>({ where: { id } });
    return data;
  }
}
