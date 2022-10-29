import { ServersService } from './servers.service';
import { Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';

@Controller('api/v1/nodes/')
export class ServersController {

    constructor(private readonly serversService: ServersService){}

    @Get()
    findAll() {
        return this.serversService.findAll()
    }

    @Post()
    createServer() {
        return 'CREATES SERVER'
    }

    @Post('/pingAll')
    pingAll() {

        return 'PING ALL'
        return this.serversService.findAll()
    }

    @Post('/:id/ping')
    pingSingle(@Req() req){
        return 'PING SINGLE'
        return this.serversService.pingSingle(req.id);
    }

    @Put('/:id')
    updateServer(@Req() req){
        return 'UPDATE SERVER'
    }

    @Delete('/:id')
    deleteServer(@Req() req){
        return 'DELETE SERVER'
    }
}
