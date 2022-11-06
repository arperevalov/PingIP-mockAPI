import { IsNotEmpty, IsIP, IsOptional } from "class-validator";

export class CreactePingIpDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsIP()
    readonly ip_address: string;
    
    @IsNotEmpty()
    @IsIP()
    readonly mac_address: string;
    
    @IsOptional()
    readonly description: string;
}