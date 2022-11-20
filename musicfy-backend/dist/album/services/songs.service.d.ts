import { Repository } from 'typeorm';
import { SongCreateDto, SongUpdateDto } from '../dtos/song.dto';
import { Song } from '../entities/song.entity';
export declare class SongsService {
    private readonly songRepository;
    constructor(songRepository: Repository<Song>);
    findAll(): Promise<Song[]>;
    findOne(songId: string): Promise<Song>;
    create(song: SongCreateDto): Promise<Song>;
    update(songId: string, data: SongUpdateDto): Promise<Song>;
    delete(songId: string): Promise<Song>;
    getBySongsByAlbum(albumId: string): Promise<Song[]>;
}
