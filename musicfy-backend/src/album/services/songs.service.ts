import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SongCreateDto, SongUpdateDto } from '../dtos/song.dto';
import { Song } from '../entities/song.entity';

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song, 'album-db')
        private readonly songRepository: Repository<Song>,
    ) {}

    async findAll(): Promise<Song[]> {
        return await this.songRepository.find(
            { where: {deletedAt: null} },
        );
    }

    async findOne(songId: string): Promise<Song> {
        return await this.songRepository.findOne({ where: { id: songId } });;
    }

    async create(song: SongCreateDto): Promise<Song> {
        const newSong = new Song()
        try {
            newSong.name = song.name;
            newSong.albumId = song.albumId;
            const songRow = await this.songRepository.create(newSong);
            return await this.songRepository.save(songRow);
        } catch (error) {
            throw new NotFoundException(error.sqlMessage);
        }
    }

    async update(songId: string, data: SongUpdateDto): Promise<Song> {
        const song: Song = await this.songRepository.findOne({ 
            where: { id: songId } 
        });

        if(song) {
            song.name = data.name ? data.name: song.name;
            await this.songRepository.update(songId, song);

            const saveSong = await this.songRepository.findOne({
                where: { 
                    id: songId, 
                }
            });

            return saveSong;
        }
        throw new NotFoundException('Song not exists')

    }

    async delete(songId: string): Promise<Song> {
        const song: Song = await this.songRepository.findOne({ 
            where: { id: songId } 
        });

        if(song) {
            await this.songRepository.delete(songId);
            return song;
        }
        throw new NotFoundException('Song not exists')
    }

    async getBySongsByAlbum(albumId: string): Promise<Song[]> {
        return await this.songRepository.find(
            { where: { albumId, deletedAt: null } },
        );
    }
}
