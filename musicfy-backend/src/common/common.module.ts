import { Module } from '@nestjs/common';
import { UploadService } from './services/upload.service';

@Module({
  exports: [UploadService],
  providers: [UploadService],
})
export class CommonModule {}