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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ProjectsService = class ProjectsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.project.create({ data });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao criar projeto', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findAll() {
        try {
            return await this.prisma.project.findMany();
        }
        catch (error) {
            if (error.code === 'P2001') {
                throw new common_1.HttpException('Nenhum projeto encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.HttpException('Algo de errado na requisição', common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async findOne(id) {
        const project = await this.prisma.project.findFirst({
            where: { id }
        });
        if (!project) {
            throw new common_1.HttpException('Projeto não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return project;
    }
    async update(data) {
        const project = await this.prisma.project.findFirst({
            where: { id: data.id },
        });
        if (!project) {
            throw new common_1.HttpException('Nenhum projeto encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        try {
            return await this.prisma.project.update({
                data,
                where: { id: data.id },
            });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao atualizar projeto', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async remove(id) {
        const project = await this.prisma.project.findFirst({
            where: { id },
        });
        if (!project) {
            throw new common_1.HttpException('Projeto não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        try {
            return await this.prisma.project.delete({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao remover projeto.', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map