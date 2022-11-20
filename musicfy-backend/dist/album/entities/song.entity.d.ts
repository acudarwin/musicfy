import { Album } from './album.entity';
export declare class Song {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    albumId: string;
    album: Album;
}
