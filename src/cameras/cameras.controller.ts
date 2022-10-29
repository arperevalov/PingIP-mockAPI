import { CamerasService } from './cameras.service';
import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('cameras')
export class CamerasController {
    constructor(private readonly camerasService: CamerasService){}

    @Get()
    findAllWithId(@Res() res) {
        return this.camerasService.findAllWithId()
    }
}
