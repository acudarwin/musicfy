import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import { Album } from './album.entity';

@Entity({
    name: "songs",
})

export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name_song', type: 'varchar', length: 100, nullable: false, unique: true})
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @Column({ name: 'album_id', nullable: true, type: 'varchar' })
    albumId: string;

    @ManyToOne(() => Album, { cascade: true, nullable: false })
    @JoinColumn({ name: 'album_id' })
    album: Album;
}