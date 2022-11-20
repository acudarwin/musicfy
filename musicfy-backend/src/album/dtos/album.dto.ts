import { IsDefined, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class AlbumReadDto {
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
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly nameArtist: string;

    @Expose()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly yearAlbum: string;
}

export class AlbumCreateDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly nameArtist: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    readonly yearAlbum: string;

}