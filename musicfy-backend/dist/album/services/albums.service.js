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
exports.AlbumsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_entity_1 = require("../entities/album.entity");
const typeorm_2 = require("typeorm");
const upload_service_1 = require("../../common/services/upload.service");
let AlbumsService = class AlbumsService {
    constructor(albumRepository, uploadService) {
        this.albumRepository = albumRepository;
        this.uploadService = uploadService;
    }
    async findAll(params) {
        const [data, total] = await this.albumRepository.findAndCount({
            skip: (params.page - 1) * params.limit,
            take: params.limit,
        });
        return {
            data,
            total,
        };
    }
    async findOne(albumId) {
        return await this.albumRepository.findOne({ where: { id: albumId } });
    }
    async create(data, file) {
        try {
            const [albums, albumsCount] = await this.albumRepository.findAndCount();
            if (albumsCount < 20) {
                const album = await this.albumRepository.save(data);
                if (file) {
                    const fileSave = await this.uploadService.uploadFile(file, 'albums', album.id);
                    await this.albumRepository.update(album.id, {
                        imagePath: '/albums/' + fileSave.filename,
                    });
                }
                return album;
            }
            throw new common_1.ForbiddenException();
        }
        catch (error) {
            throw new common_1.NotFoundException("You can not create more albums");
        }
    }
    async update(id, data, file) {
        try {
            const album = await this.albumRepository.findOne({ where: { id } });
            const dataSave = Object.assign({}, data);
            if (file) {
                const fileSave = await this.uploadService.uploadFile(file, 'albums', album.id);
                dataSave.imagePath = '/albums/' + fileSave.filename;
            }
            await this.albumRepository.update(id, dataSave);
            return this.albumRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async delete(id) {
        const album = await this.albumRepository.findOne({ where: { id } });
        if (album) {
            await this.albumRepository.delete(id);
            return album;
        }
        throw new common_1.NotFoundException('Album not exists');
    }
};
AlbumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(album_entity_1.Album, 'album-db')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        upload_service_1.UploadService])
], AlbumsService);
exports.AlbumsService = AlbumsService;
//# sourceMappingURL=albums.service.js.map