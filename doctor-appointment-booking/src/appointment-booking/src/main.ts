// src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppointmentBookingModule } from './appointment-booking.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppointmentBookingModule,
        {
      transport: Transport.TCP,
      options: { port: 3003 },
    },
  );
  await app.listen();
}
bootstrap();