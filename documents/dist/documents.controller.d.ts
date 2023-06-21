import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dtos/create-document.dto';
import { UpdateDocumentDto } from './dtos/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto): Promise<{
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
    update(updateDocumentDto: UpdateDocumentDto): Promise<{
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
