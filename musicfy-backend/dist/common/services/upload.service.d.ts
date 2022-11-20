/// <reference types="multer" />
export declare class UploadService {
    uploadFile(file: Express.Multer.File, destiny: string, filename: string): Promise<unknown>;
}
