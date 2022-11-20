"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
let UploadService = class UploadService {
    async uploadFile(file, destiny, filename) {
        const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        const saveFilename = filename + ext;
        const pathSave = (0, path_1.join)(__dirname, '../../', 'uploads', destiny, saveFilename);
        return new Promise((resolve, reject) => {
            fs.writeFile(pathSave, file.buffer, (err) => {
                if (err)
                    reject(err);
                resolve({
                    filename: saveFilename,
                    path: pathSave,
                });
            });
        });
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map