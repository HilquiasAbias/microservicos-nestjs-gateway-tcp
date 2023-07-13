import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { ProjectsModule } from "./projects.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProjectsModule, {
    transport: Transport.RMQ,
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