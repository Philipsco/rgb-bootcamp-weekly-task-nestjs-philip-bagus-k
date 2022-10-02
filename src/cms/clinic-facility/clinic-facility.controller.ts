import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClinicFacilityService } from './clinic-facility.service';
import { CreateClinicFacilityDto } from './dto/create-clinic-facility.dto';
import { UpdateClinicFacilityDto } from './dto/update-clinic-facility.dto';

@Controller('clinic-facility')
export class ClinicFacilityController {
  constructor(private readonly clinicFacilityService: ClinicFacilityService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createClinicFacilityDto: CreateClinicFacilityDto) {
    return this.clinicFacilityService.create(createClinicFacilityDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.clinicFacilityService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.clinicFacilityService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  update(
    @Param('id') id: string,
    @Body() updateClinicFacilityDto: UpdateClinicFacilityDto,
  ) {
    return this.clinicFacilityService.update(+id, updateClinicFacilityDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return 'Successfully Deleted';
  }
}
