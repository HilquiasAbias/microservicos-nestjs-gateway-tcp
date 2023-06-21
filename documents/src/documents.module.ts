import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [DocumentsController],
  providers: [DocumentsService, PrismaClient],
})
export class DocumentsModule {}
