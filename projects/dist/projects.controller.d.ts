import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<{
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
    update(updateProjectDto: UpdateProjectDto): Promise<{
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
