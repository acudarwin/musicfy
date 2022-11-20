import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({
    name: "albums",
})

export class Album {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name', type: 'varchar', length: 100, nullable: false, unique: true})
    name: string;

    @Column({name: 'name_artist', type: 'varchar', length: 100, nullable: false, unique: true})
    nameArtist: string;

    @Column({name: 'year_album', type: 'varchar', nullable: false})
    yearAlbum: string;

    @Column({ name: 'image_path', type: 'varchar', length: 255, nullable: true })
    imagePath : string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}