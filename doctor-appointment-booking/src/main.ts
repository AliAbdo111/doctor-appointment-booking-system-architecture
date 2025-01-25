import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<INestMicroservice>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { port: 3001 },
    },
  );
  await app.listen();
}
bootstrap();
