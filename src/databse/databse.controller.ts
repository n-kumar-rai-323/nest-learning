import { Controller, Get } from '@nestjs/common';
import { DatabseService } from './databse.service';


@Controller('databse')
export class DatabseController {
    constructor(private readonly databaseService: DatabseService){}
    @Get('status')
    getStatus() {
        return {
            status: this.databaseService.getStatus(),
        }
    }
}
