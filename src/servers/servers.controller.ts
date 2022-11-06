import { JwtAuthGuard } from './../common/guards/jwt-auth.guard';
import { HttpExceptionFilter } from './../common/filters/http-exception.filter';
import { ServersService } from './servers.service';
import { Controller, Delete, Get, Post, Put, Body, Param, UsePipes, ValidationPipe, UseFilters, UseGuards } from '@nestjs/common';
import { CamerasService } from 'src/cameras/cameras.service';
import { CreactePingIpDto } from 'src/common/dto/create-ping-ip.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/v1/nodes/')
export class ServersController {

    constructor(
        private readonly serversService: ServersService, 
        private readonly camerasService: CamerasService
        ){}

    @Get()
    findAll() {
        return this.serversService.findAll()
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
    createServer(@Body() body: CreactePingIpDto) {
        return this.serversService.createServer(body)
    }

    @Post('/pingAll')
    pingAll() {
        return this.serversService.pingAll()
    }

    @Post('/:id/ping')
    pingSingle(@Param() params){
        return this.serversService.pingSingle(params.id);
    }

    @Put('/:id')
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
    updateServer(@Param() params, @Body() body: CreactePingIpDto){
        return this.serversService.updateServer(params.id, body);
    }

    @Delete('/:id')
    deleteServer(@Param() params){
        return this.serversService.deleteServer(params.id);
    }

    @Get('/:id/clients')
    findAllCamerasWithId(@Param() params) {
        return this.camerasService.findAllCamerasWithId(params.id)
    }

    @Post('/:id/clients')
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
    createCamera(@Param() params, @Body() body: CreactePingIpDto) {
        return this.camerasService.createCamera(params.id, body)
    }

    @Post('/:id/clients/pingAll')
    pingAllCameras(@Param() params) {
        return this.camerasService.pingAllCameras(params.id)
    }

    @Post('/:parent_id/clients/:id/ping')
    pingSingleCamera(@Param() params) {
        return this.camerasService.pingSingleCamera(params.parent_id, params.id)
    }

    @Put('/:parent_id/clients/:id')
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
    updateCamera(@Param() params, @Body() body: CreactePingIpDto){
        return this.camerasService.updateCamera(params.parent_id, params.id, body);
    }

    @Delete('/:parent_id/clients/:id')
    deleteCamera(@Param() params){
        return this.camerasService.deleteCamera(params.parent_id, params.id,);
    }
}
