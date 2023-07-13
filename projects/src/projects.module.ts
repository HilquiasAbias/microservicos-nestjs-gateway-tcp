import { Module } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaClient],
})
export class ProjectsModule {}
