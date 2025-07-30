import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateRevenuDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsNumber()
  montant: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  source?: string;
}
