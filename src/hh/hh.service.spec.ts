import { Test, TestingModule } from '@nestjs/testing';
import { HhService } from './hh.service';

describe('HhService', () => {
  let service: HhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HhService],
    }).compile();

    service = module.get<HhService>(HhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
