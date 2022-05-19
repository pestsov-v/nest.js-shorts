import { Test, TestingModule } from '@nestjs/testing';
import { TopPageService } from './top-page.service';

describe('TopPageService', () => {
  let service: TopPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopPageService],
    }).compile();

    service = module.get<TopPageService>(TopPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
