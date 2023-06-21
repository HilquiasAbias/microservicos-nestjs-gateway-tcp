import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(
    @Inject("PROJECTS") private readonly projectService: ClientProxy,
    @Inject("DOCUMENTS") private readonly documentsService: ClientProxy
  ) {}

  createProject(data: any) {
    const pattern = { cmd: "create-project" };
    const payload = data;

    return this.projectService.send(pattern, payload)
  }

  getAllProjects() {
    const pattern = { cmd: "get-all-projects" };
    const payload = {};

    return this.projectService.send(pattern, payload)
  }

  getOneProject(id: string) {
    const pattern = { cmd: "get-one-project" };
    const payload = id;

    return this.projectService.send(pattern, payload)
  }

  updateProject(id: string, data: any) {
    const pattern = { cmd: "update-project" };
    const payload = { id, ...data };

    return this.projectService.send(pattern, payload)
  }

  deleteProject(id: string) {
    const pattern = { cmd: "delete-project" };
    const payload = id;

    return this.projectService.send(pattern, payload)
  }

  createDocument(data: any) {
    const pattern = { cmd: "create-document" };
    const payload = data;

    return this.documentsService.send(pattern, payload)
  }

  getAllDocuments() {
    const pattern = { cmd: "get-all-documents" };
    const payload = {};

    return this.documentsService.send(pattern, payload)
  }

  getOneDocument(id: string) {
    const pattern = { cmd: "get-one-document" };
    const payload = id;

    return this.documentsService.send(pattern, payload)
  }

  updateDocument(id: string, data: any) {
    const pattern = { cmd: "update-document" };
    const payload = { id, ...data };

    return this.documentsService.send(pattern, payload)
  }

  deleteDocument(id: string) {
    const pattern = { cmd: "delete-document" };
    const payload = id;

    return this.documentsService.send(pattern, payload)
  }
}