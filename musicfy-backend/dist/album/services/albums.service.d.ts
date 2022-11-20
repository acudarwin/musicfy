/// <reference types="multer" />
import { Album } from '../entities/album.entity';
import { Repository } from 'typeorm';
import { AlbumCreateDto, AlbumReadDto } from '../dtos/album.dto';
import { PaginatedDto, PaginateParams } from 'src/common/dtos/paginated.dto';
import { UploadService } from 'src/common/services/upload.service';
export declare class AlbumsService {
    private readonly albumRepository;
    private readonly uploadService;
    constructor(albumRepository: Repository<Album>, uploadService: UploadService);
    findAll(params: PaginateParams): Promise<PaginatedDto<AlbumReadDto>>;
    findOne(albumId: string): Promise<Album>;
    create(data: AlbumCreateDto, file?: Express.Multer.File): Promise<AlbumCreateDto & Album>;
    update(id: string, data: AlbumCreateDto, file?: Express.Multer.File): Promise<Album>;
    delete(id: string): Promise<Album>;
}
