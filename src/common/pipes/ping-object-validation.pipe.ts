import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';

@Injectable()
export class PingIpValidationPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    if ( !value.name 
        || !value.ip_address 
        || !value.mac_address 
        || !value.description ) {
        throw new HttpException('Not all values included or valid', 400)
    }
    return value;
  }
}