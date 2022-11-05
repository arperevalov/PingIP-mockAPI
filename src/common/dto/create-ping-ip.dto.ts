import { IsNotEmpty, IsIP } from "class-validator";

export class CreactePingIpDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsIP()
    readonly ip_address: string;
    
    @IsNotEmpty()
    @IsIP()
    readonly mac_address: string;
    
    
    readonly description: string;
}