import { Appointment } from '../domains/appoinment.model';

export interface AppointmentRepositoryPort {
  findById(id: string): Promise<Appointment>;
  update(appointment: Appointment): Promise<Appointment>;
}