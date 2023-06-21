import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateProjectDto) {
    try {
      return await this.prisma.project.create({ data });
    } catch (error) {
      throw new HttpException('Falha ao criar projeto', HttpStatus.FORBIDDEN);
    }
  }

  async findAll() {
    try {
      return await this.prisma.project.findMany();
    } catch (error) {
      if (error.code === 'P2001') {
        throw new HttpException(
          'Nenhum projeto encontrado',
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
    const project = await this.prisma.project.findFirst({
      where: { id }
    });

    if (!project) {
      throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  async update(data: UpdateProjectDto) {
    const project = await this.prisma.project.findFirst({
      where: { id: data.id },
    });

    if (!project) {
      throw new HttpException(
        'Nenhum projeto encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    try {
      return await this.prisma.project.update({
        data,
        where: { id: data.id },
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar projeto',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async remove(id: string) {
    const project = await this.prisma.project.findFirst({
      where: { id },
    });

    if (!project) {
      throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      return await this.prisma.project.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao remover projeto.',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}