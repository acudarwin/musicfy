import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { AlbumsController } from './controllers/albums.controller';
import { AlbumsService } from './services/albums.service';
import { CommonModule } from '../common/common.module';
import { SongsService } from './services/songs.service';
import { SongsController } from './controllers/songs.controller';
import { Song } from './entities/song.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Album, Song], 'album-db'),
        CommonModule
    ],
    controllers: [AlbumsController, SongsController],
    providers: [AlbumsService, SongsService],
})
export class AlbumModule {}
