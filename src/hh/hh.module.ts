import { Module } from '@nestjs/common';
import { HhService } from './hh.service';

@Module({
  providers: [HhService],
})
export class HhModule {}
