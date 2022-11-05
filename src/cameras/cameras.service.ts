import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CamerasService {

  constructor(private prisma: PrismaService) {}

  async findAllCamerasWithId(parent_id: string) {
    return this.prisma.camera.findMany({
        where: {
            parent_id: parseInt(parent_id)
        }
    })
  }

  async findSingleCamera(parent_id: string, id: string) {
    return this.prisma.camera.findMany({
      where: {
        AND: [
          {parent_id: parseInt(parent_id)},
          {id: parseInt(id)}
        ]
      }
    }).then(data => {
      return data[0]
    })
  }

  async createCamera(parent_id: string, data) {
    let {name, ip_address, mac_address, description} = data;
    if (!description) description = '';
    return this.prisma.camera.create({
        data: {
            name, 
            ip_address, 
            mac_address, 
            description, 
            last_ping: new Date().toISOString(), 
            status: true,
            parent_id: parseInt(parent_id)
        },
        include: {
            parent: true
        }
    })
  }

  async pingAllCameras(parent_id: string) {
    let date = new Date().toISOString();
      return this.prisma.camera.updateMany({
        data: {
          last_ping: date
        },
        where: {
          id: {
            not: -1
          }
        }
      }).then(()=>{
        return this.findAllCamerasWithId(parent_id)
      })
  }

  async pingSingleCamera(parent_id: string, id: string) {
    let date = new Date(Date.now()).toISOString();
    
    return this.prisma.camera.updateMany({
        data: {
            last_ping: date
        },
        where: {
            AND: [
                {id: parseInt(id)},
                {parent_id: parseInt(parent_id)}
                ]
        }
    }).then(()=> {
        return this.findSingleCamera(parent_id, id)
    })
  }

  async updateCamera(parent_id: string, id:string, data) {
    let {name, ip_address, mac_address, description} = data;
    if (!description) description = '';
    return this.prisma.camera.updateMany({
        data:{
            name,
            ip_address,
            mac_address,
            description
          },
        where: {
            AND: [
                {id: parseInt(id)},
                {parent_id: parseInt(parent_id)}
                ]
        }
    })
  }

  async deleteCamera(parent_id: string, id: string) {
    return this.prisma.camera.deleteMany({
        where: {
            AND: [
                {id: parseInt(id)},
                {parent_id: parseInt(parent_id)}
                ]
        }
    })
  }
}
