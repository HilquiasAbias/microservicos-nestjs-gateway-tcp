import { CreateDocumentDto } from './dtos/create-document.dto';
import { UpdateDocumentDto } from './dtos/update-document.dto';
import { PrismaClient } from '@prisma/client';
export declare class DocumentsService {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: CreateDocumentDto): Promise<{
        id: string;
        title: string;
        content: string;
    } & {}>;
    findAll(): Promise<({
        id: string;
        title: string;
        content: string;
    } & {})[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        content: string;
    } & {}>;
    update(data: UpdateDocumentDto): Promise<{
        id: string;
        title: string;
        content: string;
    } & {}>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        content: string;
    } & {}>;
}
