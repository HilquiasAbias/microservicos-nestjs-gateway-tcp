import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROJECTS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'projects_queue',
        },
      },
      {
        name: "DOCUMENTS",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'documents_queue',
        },
      }
    ])
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
