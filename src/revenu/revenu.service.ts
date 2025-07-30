import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenu } from './entities/revenu.entity';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
  ) {}

  create(createRevenuDto: CreateRevenuDto) {
    const revenu = this.revenuRepository.create(createRevenuDto);
    return this.revenuRepository.save(revenu);
  }

  findAll() {
    return this.revenuRepository.find();
  }

  async findOne(id: number) {
    const revenu = await this.revenuRepository.findOneBy({ id });
    if (!revenu) {
      throw new NotFoundException(`Revenu avec id ${id} non trouvé`);
    }
    return revenu;
  }

  async update(id: number, updateRevenuDto: UpdateRevenuDto) {
    await this.revenuRepository.update(id, updateRevenuDto);
    const updated = await this.revenuRepository.findOneBy({ id });
    if (!updated) {
      throw new NotFoundException(`Revenu avec id ${id} non trouvé après mise à jour`);
    }
    return updated;
  }

  async remove(id: number) {
    const revenu = await this.revenuRepository.findOneBy({ id });
    if (!revenu) {
      throw new NotFoundException(`Revenu avec id ${id} non trouvé`);
    }
    await this.revenuRepository.delete(id);
  }
}
