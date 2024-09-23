import { Controller, Get, Param } from '@nestjs/common';
import sensors, { Sensor } from 'src/sensors';

@Controller('sensors')
export class SensorsController {
  constructor() {}

  @Get()
  async index(): Promise<Sensor[]> {
    return sensors;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Sensor> {
    return sensors.find((item) => item.id === parseInt(id));
  }
}
