import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}
  @Get()
  getDogs() {
    return this.dogsService.getDogs();
  }
}
