import { Test, TestingModule } from '@nestjs/testing';
import { UserSecurityController } from './user-security.controller';
import { UserSecurityService } from './user-security.service';

describe('UserSecurityController', () => {
  let controller: UserSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSecurityController],
      providers: [UserSecurityService],
    }).compile();

    controller = module.get<UserSecurityController>(UserSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
