import { SongCreateDto, SongUpdateDto } from '../dtos/song.dto';
import { Song } from '../entities/song.entity';
import { SongsService } from '../services/songs.service';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    findAll(): Promise<Song[]>;
    findOne(id: string): Promise<Song>;
    create(data: SongCreateDto): Promise<Song>;
    update(data: SongUpdateDto, id: string): Promise<Song>;
    delete(id: string): Promise<Song>;
    findSongByIdAlbum(id: string): Promise<Song[]>;
}
