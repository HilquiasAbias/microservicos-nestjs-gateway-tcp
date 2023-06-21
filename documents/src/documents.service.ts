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
    const project = await this.prisma.document.findFirst({
      where: { id }
    });

    if (!project) {
      throw new HttpException('documento não encontrado', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  async update(data: UpdateDocumentDto) {
    const project = await this.prisma.document.findFirst({
      where: { id: data.id },
    });

    if (!project) {
      throw new HttpException(
        'Nenhum documento encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    try {
      return await this.prisma.document.update({
        data,
        where: { id: data.id },
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar documento',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async remove(id: string) {
    const project = await this.prisma.document.findFirst({
      where: { id },
    });

    if (!project) {
      throw new HttpException('documento não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.document.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao remover documento.',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}