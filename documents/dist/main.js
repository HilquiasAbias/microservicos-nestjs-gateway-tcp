"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const documents_module_1 = require("./documents.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(documents_module_1.DocumentsModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'documents_queue',
            queueOptions: {
                durable: true,
            },
        }
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map