"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const documents_module_1 = require("./documents.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(documents_module_1.DocumentsModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: "127.0.0.1",
            port: 8889
        }
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map