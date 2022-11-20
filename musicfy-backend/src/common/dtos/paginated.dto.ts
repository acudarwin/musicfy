import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class PaginatedDto<TData> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit?: number;

  @ApiProperty()
  offset?: number;

  data: TData[];
}


export class PaginateParams {
  @IsNumber()
  @Type(() => Number)
  limit: number;

  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'undefined') return false;
    return value;
  })
  isFuelOrder: boolean;

}