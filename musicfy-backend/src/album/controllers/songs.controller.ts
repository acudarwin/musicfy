import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SongCreateDto, SongUpdateDto } from '../dtos/song.dto';
import { Song } from '../entities/song.entity';
import { SongsService } from '../services/songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}
    
    @Get()
    async findAll(): Promise<Song[]> {
        return await this.songsService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string): Promise<Song> {
        return await this.songsService.findOne(id);
    }

    @Post()
    async create(@Body() data: SongCreateDto): Promise<Song> {
        return await this.songsService.create(data);
    }

    @Patch('/:id')
    async update(@Body() data: SongUpdateDto, @Param('id') id: string): Promise<Song> {
        return await this.songsService.update(id, data);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<Song> {
        return await this.songsService.delete(id);
    }
    
    @Get('/id/:id')
    async findSongByIdAlbum(@Param('id') id: string): Promise<Song[]> {
        return await this.songsService.getBySongsByAlbum(id);
    }
}
