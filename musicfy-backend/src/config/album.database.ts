import { registerAs } from '@nestjs/config';

export default registerAs('albumsDatabase', () => ({
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
