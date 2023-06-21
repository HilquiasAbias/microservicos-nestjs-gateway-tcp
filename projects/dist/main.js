"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const projects_module_1 = require("./projects.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(projects_module_1.ProjectsModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: "127.0.0.1",
            port: 8888
        }
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map