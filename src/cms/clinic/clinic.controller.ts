import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post()
  async create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Get()
  async findAll() {
    return this.clinicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clinicService.findOne(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateClinicDto: UpdateClinicDto) {
  //   return this.clinicService.update(+id, updateClinicDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return 'Successfully deleted';
  }
}
