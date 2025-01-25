import { EntityRepository, Repository } from 'typeorm';
import { Slot } from '../entities/slot.entity';

@EntityRepository(Slot)
export class SlotRepository extends Repository<Slot> {}
