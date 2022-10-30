import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServersController } from './servers/servers.controller';
import { ServersService } from './servers/servers.service';
import { CamerasService } from './cameras/cameras.service';

@Module({
  imports: [],
  controllers: [AppController, ServersController],
  providers: [PrismaService, AppService, ServersService, CamerasService],
})
export class AppModule {}
