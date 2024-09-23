import { Module } from '@nestjs/common';

import { SensorsController } from './sensors.controller';

@Module({
  controllers: [SensorsController],
})
export class SensorsModule {}
