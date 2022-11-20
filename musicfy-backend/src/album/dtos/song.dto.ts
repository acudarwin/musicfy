import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class SongReadDto {
    @Expose()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @Expose()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @Expose()
    @IsString()
    readonly album: string;

    @Expose()
    @IsString()
    readonly albumId: string;

}

export class SongCreateDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly albumId: string;

}

export class SongUpdateDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

}