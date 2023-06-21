import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { ProjectsModule } from "./projects.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProjectsModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8888
    }
  });
  app.listen();
}
bootstrap();