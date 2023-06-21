import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { PrismaClient } from '@prisma/client';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: CreateProjectDto): Promise<{
        id: string;
        title: string;
        description: string;
        favorite: boolean;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    } & {}>;
    findAll(): Promise<({
        id: string;
        title: string;
        description: string;
        favorite: boolean;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    } & {})[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        favorite: boolean;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    } & {}>;
    update(data: UpdateProjectDto): Promise<{
        id: string;
        title: string;
        description: string;
        favorite: boolean;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    } & {}>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        favorite: boolean;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    } & {}>;
}
