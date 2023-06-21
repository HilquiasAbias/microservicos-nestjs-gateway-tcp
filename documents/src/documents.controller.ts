import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dtos/create-document.dto';
import { UpdateDocumentDto } from './dtos/update-document.dto';

@Controller()
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @MessagePattern({ cmd: "create-document" })
  create(@Payload() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @MessagePattern({ cmd: "get-all-documents" })
  findAll() {
    return this.documentsService.findAll();
  }

  @MessagePattern({ cmd: "get-one-document" })
  findOne(@Payload() id: string) {
    return this.documentsService.findOne(id);
  }

  @MessagePattern({ cmd: "update-document" })
  update(@Payload() updateDocumentDto: UpdateDocumentDto) {
    return this.documentsService.update(updateDocumentDto);
  }

  @MessagePattern({ cmd: "delete-document" })
  remove(@Payload() id: string) {
    return this.documentsService.remove(id);
  }
}
