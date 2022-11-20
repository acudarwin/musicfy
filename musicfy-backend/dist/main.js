"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require('body-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const logger = new common_1.Logger('bootstrap');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.use(bodyParser.json({ limit: '50mb', extended: true, }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.setGlobalPrefix('api');
    await app.listen(process.env.ALBUMS_PORT || 3001);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map