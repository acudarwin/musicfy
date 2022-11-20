import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from '../entities/album.entity';
import { Repository } from 'typeorm';
import { AlbumCreateDto, AlbumReadDto } from '../dtos/album.dto';
import { PaginatedDto, PaginateParams } from 'src/common/dtos/paginated.dto';
import { UploadService } from 'src/common/services/upload.service';
import { response } from 'express';
import ExtendableError from 'extendable-error';

@Injectable()
export class AlbumsService {
    constructor(
        @InjectRepository(Album, 'album-db')
        private readonly albumRepository: Repository<Album>,
        private readonly uploadService: UploadService,
    ) {}

    async findAll(params: PaginateParams): Promise<PaginatedDto<AlbumReadDto>> {
        const [data, total] = await this.albumRepository.findAndCount({
            skip: (params.page - 1) * params.limit,
            take: params.limit,
        });
        return {
            data,
            total,
        }
    }

    async findOne(albumId: string): Promise<Album> {
        return await this.albumRepository.findOne({ where: { id: albumId } });
    }
    
    async create(data: AlbumCreateDto, file?: Express.Multer.File) {
        
        try {
            const [albums, albumsCount] = await this.albumRepository.findAndCount();
            if (albumsCount < 20) {
                const album = await this.albumRepository.save(data);
            
                if(file) {
                    const fileSave: any = await this.uploadService.uploadFile(file, 'albums', album.id);
                    await this.albumRepository.update(album.id, {
                        imagePath: '/albums/' + fileSave.filename,
                    });
                }
            
                return album;
                
            } 
            throw new ForbiddenException();
        } catch (error) {
            throw new NotFoundException("You can not create more albums");
        }  
    }

    async update(id: string, data: AlbumCreateDto, file?: Express.Multer.File) {
        try {
            const album = await this.albumRepository.findOne({ where: { id } });
            const dataSave: any = { ...data };

            if(file) {
                const fileSave: any = await this.uploadService.uploadFile(file, 'albums', album.id);
                dataSave.imagePath = '/albums/' + fileSave.filename;
            }

            await this.albumRepository.update(id, dataSave);
            return this.albumRepository.findOne({ where: { id } });
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async delete(id: string): Promise<Album>{
        const album: Album = await this.albumRepository.findOne({ where: { id } });

        if(album){
            await this.albumRepository.delete(id);
            return album;
        }
        throw new NotFoundException('Album not exists');
    }
}
