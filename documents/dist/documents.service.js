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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let DocumentsService = class DocumentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.document.create({ data });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao criar documento', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findAll() {
        try {
            return await this.prisma.document.findMany();
        }
        catch (error) {
            if (error.code === 'P2001') {
                throw new common_1.HttpException('Nenhum documento encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.HttpException('Algo de errado na requisição', common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async findOne(id) {
        const document = await this.prisma.document.findUnique({ where: { id } });
        if (!document) {
            throw new common_1.HttpException('Documento não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return document;
    }
    async update(data) {
        const { id } = data, rest = __rest(data, ["id"]);
        const document = await this.prisma.document.findUnique({ where: { id } });
        if (!document) {
            throw new common_1.HttpException('Nenhum documento encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        try {
            return await this.prisma.document.update({
                where: { id },
                data: rest,
            });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao atualizar documento', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async remove(id) {
        const document = await this.prisma.document.findUnique({ where: { id } });
        if (!document) {
            throw new common_1.HttpException('Documento não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        try {
            return await this.prisma.document.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.HttpException('Falha ao remover documento', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], DocumentsService);
exports.DocumentsService = DocumentsService;
//# sourceMappingURL=documents.service.js.map