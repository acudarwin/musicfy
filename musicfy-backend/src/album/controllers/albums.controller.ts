import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Patch,
  Body,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { AlbumCreateDto, AlbumReadDto } from '../dtos/album.dto';
import { AlbumsService } from '../services/albums.service';
import { PaginateParams, PaginatedDto } from '../../common/dtos/paginated.dto';
import { ApiParam } from '@nestjs/swagger';
import { Album } from '../entities/album.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  async findAll(
    @Query() params: PaginateParams,
  ): Promise<PaginatedDto<AlbumReadDto>> {
    return await this.albumsService.findAll(params);
  }

  @Get('/:id')
  async findone(@Param('id') id: string): Promise<Album> {
    return await this.albumsService.findOne(id);
  }

  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: (req, file, cb) => {
        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
          return cb(
            new NotFoundException(
              'The uploaded file does not have the extension jpg, jpeg or png',
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  @Post()
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Body() data: AlbumCreateDto,
  ) {
    return await this.albumsService.create(data, image);
  }

  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: (req, file, cb) => {
        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
          return cb(
            new NotFoundException(
              'The uploaded file does not have the extension jpg, jpeg or png',
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  @Patch('/:id')
  async update(
    @UploadedFile() image: Express.Multer.File,
    @Body() data: AlbumCreateDto,
    @Param('id') id: string,
  ) {
    return await this.albumsService.update(id, data, image);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<Album> {
    return this.albumsService.delete(id);
  }
}
