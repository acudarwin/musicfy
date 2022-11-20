"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_entity_1 = require("./entities/album.entity");
const albums_controller_1 = require("./controllers/albums.controller");
const albums_service_1 = require("./services/albums.service");
const common_module_1 = require("../common/common.module");
const songs_service_1 = require("./services/songs.service");
const songs_controller_1 = require("./controllers/songs.controller");
const song_entity_1 = require("./entities/song.entity");
let AlbumModule = class AlbumModule {
};
AlbumModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([album_entity_1.Album, song_entity_1.Song], 'album-db'),
            common_module_1.CommonModule
        ],
        controllers: [albums_controller_1.AlbumsController, songs_controller_1.SongsController],
        providers: [albums_service_1.AlbumsService, songs_service_1.SongsService],
    })
], AlbumModule);
exports.AlbumModule = AlbumModule;
//# sourceMappingURL=album.module.js.map