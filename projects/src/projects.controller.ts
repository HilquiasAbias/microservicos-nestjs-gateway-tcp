import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @MessagePattern({ cmd: "create-project" })
  create(@Payload() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @MessagePattern({ cmd: "get-all-projects" })
  findAll() {
    return this.projectsService.findAll();
  }

  @MessagePattern({ cmd: "get-one-project" })
  findOne(@Payload() id: string) {
    return this.projectsService.findOne(id);
  }

  @MessagePattern({ cmd: "update-project" })
  update(@Payload() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(updateProjectDto);
  }

  @MessagePattern({ cmd: "delete-project" })
  remove(@Payload() id: string) {
    return this.projectsService.remove(id);
  }
}
