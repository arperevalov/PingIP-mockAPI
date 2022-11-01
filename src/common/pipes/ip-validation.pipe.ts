import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';

@Injectable()
export class IpValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ip_address_pattern = /((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/ig
    if (!ip_address_pattern.test(value)) throw new HttpException('Wrong IP-address', 400)
    return value;
  }
}