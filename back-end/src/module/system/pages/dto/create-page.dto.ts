import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreatePageDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  pageName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  pageType: string;

  // appId
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  appId: number;
}
