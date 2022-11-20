"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const album_module_1 = require("./album/album.module");
const config_2 = require("./config");
const common_module_1 = require("./common/common.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, 'uploads'),
                exclude: ['/api*'],
                serveStaticOptions: {
                    index: false,
                },
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: config_2.default,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                name: 'album-db',
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => config.get('albumsDatabase'),
            }),
            (0, common_1.forwardRef)(() => album_module_1.AlbumModule),
            common_module_1.CommonModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map