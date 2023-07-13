"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const projects_module_1 = require("./projects.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(projects_module_1.ProjectsModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'projects_queue',
            queueOptions: {
                durable: true,
            },
        }
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map