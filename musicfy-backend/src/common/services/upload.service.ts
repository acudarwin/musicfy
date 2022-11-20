import { Injectable, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File, destiny: string, filename: string) {
    const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    const saveFilename = filename + ext;
    const pathSave = join(__dirname, '../../', 'uploads', destiny, saveFilename);

    return new Promise((resolve, reject) => {
      fs.writeFile(pathSave, file.buffer, (err) => {
        if (err) reject(err);
        resolve({
          filename: saveFilename,
          path: pathSave,
        });
      });
    });
  }
}

