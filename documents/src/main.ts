import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { DocumentsModule } from "./documents.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(DocumentsModule, {
    transport: Transport.RMQ,
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