import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const logger = new Logger('bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(bodyParser.json({ limit: '50mb', extended: true, }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));

  app.setGlobalPrefix('api');
  await app.listen(process.env.ALBUMS_PORT || 3001);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
