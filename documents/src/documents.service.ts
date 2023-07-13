import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dtos/create-document.dto';
import { UpdateDocumentDto } from './dtos/update-document.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateDocumentDto) {
    try {
      return await this.prisma.document.create({ data });
    } catch (error) {
      throw new HttpException('Falha ao criar documento', HttpStatus.FORBIDDEN);
    }
  }

  async findAll() {
    try {
      return await this.prisma.document.findMany();
    } catch (error) {
      if (error.code === 'P2001') {
        throw new HttpException(
          'Nenhum documento encontrado',
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw new HttpException(
          'Algo de errado na requisição',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async findOne(id: string) {
    const document = await this.prisma.document.findUnique({ where: { id } });

    if (!document) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    return document;
  }

  async update(data: UpdateDocumentDto) {
    const { id, ...rest } = data;
    const document = await this.prisma.document.findUnique({ where: { id } });

    if (!document) {
      throw new HttpException(
        'Nenhum documento encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    try {
      return await this.prisma.document.update({
        where: { id },
        data: rest,
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar documento',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async remove(id: string) {
    const document = await this.prisma.document.findUnique({ where: { id } });

    if (!document) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.document.delete({ where: { id } });
    } catch (error) {
      throw new HttpException(
        'Falha ao remover documento',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
