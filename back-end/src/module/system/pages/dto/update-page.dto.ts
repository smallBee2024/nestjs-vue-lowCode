import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { CreatePageDto } from './create-page.dto';

export class UpdatePageDto extends CreatePageDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  pageId: string;
}
