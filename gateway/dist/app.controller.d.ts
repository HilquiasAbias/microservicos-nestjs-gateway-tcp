import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createProject(data: any): import("rxjs").Observable<any>;
    getAllProjects(): import("rxjs").Observable<any>;
    getOneProject(id: string): import("rxjs").Observable<any>;
    updateProject(id: string, data: any): import("rxjs").Observable<any>;
    deleteProject(id: string): import("rxjs").Observable<any>;
    createDocument(data: any): import("rxjs").Observable<any>;
    getAllDocuments(): import("rxjs").Observable<any>;
    getOneDocument(id: string): import("rxjs").Observable<any>;
    updateDocument(id: string, data: any): import("rxjs").Observable<any>;
    deleteDocument(id: string): import("rxjs").Observable<any>;
}
