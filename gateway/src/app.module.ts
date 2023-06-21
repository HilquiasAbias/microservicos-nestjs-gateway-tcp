import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PROJECTS",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8888
        }
      },
      {
        name: "DOCUMENTS",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8889
        }
      }
    ])
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
