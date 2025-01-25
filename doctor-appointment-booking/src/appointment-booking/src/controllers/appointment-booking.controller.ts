// src/doctor-appointment-management/controllers/management.controller.ts
import { Controller, Put, Param, Delete } from '@nestjs/common';
import { AppointmentRepositoryPort } from '../ports/appointment.repository.port';

@Controller('management/appointments')
export class ManagementController {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryPort,
  ) {}

  @Put(':id/complete')
  async completeAppointment(@Param('id') id: string) {
    const appointment = await this.appointmentRepository.findById(id);
    appointment.status = 'completed';
    return this.appointmentRepository.update(appointment);
  }

  @Delete(':id')
  async cancelAppointment(@Param('id') id: string) {
    const appointment = await this.appointmentRepository.findById(id);
    appointment.status = 'canceled';
    return this.appointmentRepository.update(appointment);
  }
}