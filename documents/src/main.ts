import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { DocumentsModule } from "./documents.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(DocumentsModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8889
    }
  });
  app.listen();
}
bootstrap();