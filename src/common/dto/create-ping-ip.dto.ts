import { IsNotEmpty, IsIP, IsOptional } from "class-validator";
import { IsMacAddress } from "../validators/isMacAddress";

export class CreactePingIpDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsIP()
    readonly ip_address: string;
    
    @IsNotEmpty()
    @IsMacAddress({
        message: 'Value should be mac-address',
      })
    readonly mac_address: string;
    
    @IsOptional()
    readonly description: string;
}