import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServersService {

  constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.server.findMany({
      });
    }

    async createServer(data) {
      const {name, ip_address, mac_address, description} = data;
      const newData = {name, ip_address, mac_address, description, last_ping: new Date().toISOString(), status: true};
      return this.prisma.server.create({
        data: newData,
      });
    }

    async pingSingle(id: string) {
      let date = new Date(Date.now()).toISOString();
      return this.prisma.server.update({
        data: {
          last_ping: date
        },
        where: {
          id: parseInt(id)
        }
      })
    }

    async pingAll() {
      let date = new Date(Date.now()).toISOString();
      return this.prisma.server.updateMany({
        data: {
          last_ping: date
        },
        where: {
          id: {
            not: -1
          }
        }
      }).then(()=>{
        return this.findAll()
      })
    }

    async updateServer(id: string, data) {
      return this.prisma.server.update({
        data:{
          ...data
        },
        where: {
          id: parseInt(id)
        }
      })
    }

    async deleteServer(id: string) {
      return this.prisma.server.delete({
        where: {
          id: parseInt(id)
        }
      })
    }
}
