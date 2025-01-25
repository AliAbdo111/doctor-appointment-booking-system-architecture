import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentRepositoryPort } from '../ports/appointment.repository.port';
import { Appointment as AppointmentEntity } from '../../appointment-booking/entities/appointment.entity';
import { Appointment } from '../domains/appoinment.model';

@Injectable()
export class TypeOrmAppointmentRepository implements AppointmentRepositoryPort {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly repository: Repository<AppointmentEntity>,
  ) {}

  async findById(id: string): Promise<Appointment> {
    const entity = await this.repository.findOne(id);
    return this.toDomain(entity);
  }

  async update(appointment: Appointment): Promise<Appointment> {
    const entity = this.toEntity(appointment);
    const updatedEntity = await this.repository.save(entity);
    return this.toDomain(updatedEntity);
  }

  private toDomain(entity: AppointmentEntity): Appointment {
    return {
      id: entity.id,
      slotId: entity.slotId,
      patientId: entity.patientId,
      patientName: entity.patientName,
      reservedAt: entity.reservedAt,
      status: 'scheduled', // Default status
    };
  }

  private toEntity(appointment: Appointment): AppointmentEntity {
    const entity = new AppointmentEntity();
    entity.id = appointment.id;
    entity.slotId = appointment.slotId;
    entity.patientId = appointment.patientId;
    entity.patientName = appointment.patientName;
    entity.reservedAt = appointment.reservedAt;
    return entity;
  }
}