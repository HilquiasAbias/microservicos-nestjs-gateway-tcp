"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppService = class AppService {
    constructor(projectService, documentsService) {
        this.projectService = projectService;
        this.documentsService = documentsService;
    }
    createProject(data) {
        const pattern = { cmd: "create-project" };
        const payload = data;
        return this.projectService.send(pattern, payload);
    }
    getAllProjects() {
        const pattern = { cmd: "get-all-projects" };
        const payload = {};
        return this.projectService.send(pattern, payload);
    }
    getOneProject(id) {
        const pattern = { cmd: "get-one-project" };
        const payload = id;
        return this.projectService.send(pattern, payload);
    }
    updateProject(id, data) {
        const pattern = { cmd: "update-project" };
        const payload = Object.assign({ id }, data);
        return this.projectService.send(pattern, payload);
    }
    deleteProject(id) {
        const pattern = { cmd: "delete-project" };
        const payload = id;
        return this.projectService.send(pattern, payload);
    }
    createDocument(data) {
        const pattern = { cmd: "create-document" };
        const payload = data;
        return this.documentsService.send(pattern, payload);
    }
    getAllDocuments() {
        const pattern = { cmd: "get-all-documents" };
        const payload = {};
        return this.documentsService.send(pattern, payload);
    }
    getOneDocument(id) {
        const pattern = { cmd: "get-one-document" };
        const payload = id;
        return this.documentsService.send(pattern, payload);
    }
    updateDocument(id, data) {
        const pattern = { cmd: "update-document" };
        const payload = Object.assign({ id }, data);
        return this.documentsService.send(pattern, payload);
    }
    deleteDocument(id) {
        const pattern = { cmd: "delete-document" };
        const payload = id;
        return this.documentsService.send(pattern, payload);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PROJECTS")),
    __param(1, (0, common_1.Inject)("DOCUMENTS")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map