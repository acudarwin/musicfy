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
exports.AlbumsController = void 0;
const common_1 = require("@nestjs/common");
const album_dto_1 = require("../dtos/album.dto");
const albums_service_1 = require("../services/albums.service");
const paginated_dto_1 = require("../../common/dtos/paginated.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AlbumsController = class AlbumsController {
    constructor(albumsService) {
        this.albumsService = albumsService;
    }
    async findAll(params) {
        return await this.albumsService.findAll(params);
    }
    async findone(id) {
        return await this.albumsService.findOne(id);
    }
    async create(image, data) {
        return await this.albumsService.create(data, image);
    }
    async update(image, data, id) {
        return await this.albumsService.update(id, data, image);
    }
    async delete(id) {
        return this.albumsService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginated_dto_1.PaginateParams]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "findone", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        fileFilter: (req, file, cb) => {
            if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
                return cb(new common_1.NotFoundException('The uploaded file does not have the extension jpg, jpeg or png'), false);
            }
            cb(null, true);
        },
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, album_dto_1.AlbumCreateDto]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "create", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        fileFilter: (req, file, cb) => {
            if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
                return cb(new common_1.NotFoundException('The uploaded file does not have the extension jpg, jpeg or png'), false);
            }
            cb(null, true);
        },
    })),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, album_dto_1.AlbumCreateDto, String]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "delete", null);
AlbumsController = __decorate([
    (0, common_1.Controller)('albums'),
    __metadata("design:paramtypes", [albums_service_1.AlbumsService])
], AlbumsController);
exports.AlbumsController = AlbumsController;
//# sourceMappingURL=albums.controller.js.map