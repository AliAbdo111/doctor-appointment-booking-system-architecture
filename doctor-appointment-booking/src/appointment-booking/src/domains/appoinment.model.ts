
// src/doctor-appointment-management/domain/appointment.model.ts
export class Appointment {
    id: string;
    slotId: string;
    patientId: string;
    patientName: string;
    reservedAt: Date;
    status: 'scheduled' | 'completed' | 'canceled';
  }