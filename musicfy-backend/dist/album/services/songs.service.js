"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const song_entity_1 = require("../entities/song.entity");
let SongsService = class SongsService {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }
    async findAll() {
        return await this.songRepository.find({ where: { deletedAt: null } });
    }
    async findOne(songId) {
        return await this.songRepository.findOne({ where: { id: songId } });
        ;
    }
    async create(song) {
        const newSong = new song_entity_1.Song();
        try {
            newSong.name = song.name;
            newSong.albumId = song.albumId;
            const songRow = await this.songRepository.create(newSong);
            return await this.songRepository.save(songRow);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.sqlMessage);
        }
    }
    async update(songId, data) {
        const song = await this.songRepository.findOne({
            where: { id: songId }
        });
        if (song) {
            song.name = data.name ? data.name : song.name;
            await this.songRepository.update(songId, song);
            const saveSong = await this.songRepository.findOne({
                where: {
                    id: songId,
                }
            });
            return saveSong;
        }
        throw new common_1.NotFoundException('Song not exists');
    }
    async delete(songId) {
        const song = await this.songRepository.findOne({
            where: { id: songId }
        });
        if (song) {
            await this.songRepository.delete(songId);
            return song;
        }
        throw new common_1.NotFoundException('Song not exists');
    }
    async getBySongsByAlbum(albumId) {
        return await this.songRepository.find({ where: { albumId, deletedAt: null } });
    }
};
SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_entity_1.Song, 'album-db')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SongsService);
exports.SongsService = SongsService;
//# sourceMappingURL=songs.service.js.map