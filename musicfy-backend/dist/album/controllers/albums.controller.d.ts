/// <reference types="multer" />
import { AlbumCreateDto, AlbumReadDto } from '../dtos/album.dto';
import { AlbumsService } from '../services/albums.service';
import { PaginateParams, PaginatedDto } from '../../common/dtos/paginated.dto';
import { Album } from '../entities/album.entity';
export declare class AlbumsController {
    private readonly albumsService;
    constructor(albumsService: AlbumsService);
    findAll(params: PaginateParams): Promise<PaginatedDto<AlbumReadDto>>;
    findone(id: string): Promise<Album>;
    create(image: Express.Multer.File, data: AlbumCreateDto): Promise<AlbumCreateDto & Album>;
    update(image: Express.Multer.File, data: AlbumCreateDto, id: string): Promise<Album>;
    delete(id: string): Promise<Album>;
}
