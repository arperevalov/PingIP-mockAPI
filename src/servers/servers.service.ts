import { Injectable } from '@nestjs/common';

@Injectable()
export class ServersService {

    findAll() {
        return [
            {
              "id": 1,
              "name": "Server #1",
              "ip_address": "123.123.123.123",
              "description": "Small description for server",
              "mac_address": "123.123.123.123",
              "status": "true",
              "last_ping": "2022-06-09T09:31:45+00:00"
            },
            {
              "name": "Server #2",
              "ip_address": "123.123.123.124",
              "description": "",
              "mac_address": "123.123.123.124",
              "id": 2,
              "last_ping": "2022-06-09T09:31:45+00:00"
            },
            {
              "name": "Server #3",
              "ip_address": "123.123.123.125",
              "description": "",
              "mac_address": "123.123.123.126",
              "id": 3,
              "last_ping": "2022-06-09T09:31:45+00:00"
            },
            {
              "name": "Server #4",
              "ip_address": "123.123.123.126",
              "mac_address": "123.123.123.126",
              "description": "",
              "id": 4,
              "last_ping": "2022-06-09T09:31:45+00:00"
            },
            {
              "name": "qweq",
              "ip_address": "qweqwe",
              "mac_address": "qwe",
              "description": "",
              "id": 5
            }
          ]
    }

    pingSingle(id: number) {
        return []
    }
}
