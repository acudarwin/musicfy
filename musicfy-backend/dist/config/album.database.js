"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('albumsDatabase', () => ({
    type: 'mysql',
    name: 'album-db',
    host: process.env.ALBUMS_DB_HOST || 'localhost',
    username: process.env.ALBUMS_DB_USERNAME || 'root',
    password: process.env.ALBUMS_DB_PASSWORD || 'root',
    database: 'album',
    port: parseInt(process.env.ALBUMS_DB_PORT, 10),
    autoLoadEntities: true,
    synchronize: true,
}));
//# sourceMappingURL=album.database.js.map