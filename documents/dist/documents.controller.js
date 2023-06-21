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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const documents_service_1 = require("./documents.service");
const create_document_dto_1 = require("./dtos/create-document.dto");
const update_document_dto_1 = require("./dtos/update-document.dto");
let DocumentsController = class DocumentsController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    create(createDocumentDto) {
        return this.documentsService.create(createDocumentDto);
    }
    findAll() {
        return this.documentsService.findAll();
    }
    findOne(id) {
        return this.documentsService.findOne(id);
    }
    update(updateDocumentDto) {
        return this.documentsService.update(updateDocumentDto);
    }
    remove(id) {
        return this.documentsService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "create-document" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "get-all-documents" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "get-one-document" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "update-document" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_document_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "delete-document" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "remove", null);
DocumentsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
exports.DocumentsController = DocumentsController;
//# sourceMappingURL=documents.controller.js.map