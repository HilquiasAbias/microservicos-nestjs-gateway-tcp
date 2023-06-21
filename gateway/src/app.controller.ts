import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/projects')
  createProject(@Body() data: any) {
    return this.appService.createProject(data)
  }
  
  @Get('/projects')
  getAllProjects() {
    return this.appService.getAllProjects()
  }

  @Get('/projects/:id')
  getOneProject(@Param('id') id: string) {
    return this.appService.getOneProject(id)
  }

  @Patch('/projects/:id')
  updateProject(@Param('id') id: string, @Body() data: any) {
    return this.appService.updateProject(id, data)
  }

  @Delete('/projects/:id')
  deleteProject(@Param('id') id: string) {
    return this.appService.deleteProject(id)
  }
  
  @Post('/documents')
  createDocument(@Body() data: any) {
    return this.appService.createDocument(data)
  }
  
  @Get('/documents')
  getAllDocuments() {
    return this.appService.getAllDocuments()
  }

  @Get('/documents/:id')
  getOneDocument(@Param('id') id: string) {
    return this.appService.getOneDocument(id)
  }

  @Patch('/documents/:id')
  updateDocument(@Param('id') id: string, @Body() data: any) {
    return this.appService.updateDocument(id, data)
  }

  @Delete('/documents/:id')
  deleteDocument(@Param('id') id: string) {
    return this.appService.deleteDocument(id)
  }
}
