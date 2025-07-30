import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Depense } from './entities/depense.entity';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
  ) {}

  create(createDepenseDto: CreateDepenseDto) {
    const depense = this.depenseRepository.create(createDepenseDto);
    return this.depenseRepository.save(depense);
  }

  findAll() {
    return this.depenseRepository.find();
  }

  async findOne(id: number) {
    const depense = await this.depenseRepository.findOneBy({ id });
    if (!depense) {
      throw new NotFoundException(`Dépense avec id ${id} non trouvée`);
    }
    return depense;
  }

  async update(id: number, updateDepenseDto: UpdateDepenseDto) {
    await this.depenseRepository.update(id, updateDepenseDto);
    const updated = await this.depenseRepository.findOneBy({ id });
    if (!updated) {
      throw new NotFoundException(`Dépense avec id ${id} non trouvée après mise à jour`);
    }
    return updated;
  }

  async remove(id: number) {
    const depense = await this.depenseRepository.findOneBy({ id });
    if (!depense) {
      throw new NotFoundException(`Dépense avec id ${id} non trouvée`);
    }
    await this.depenseRepository.delete(id);
  }
}
