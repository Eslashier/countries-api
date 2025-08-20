import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Continent } from './continent.entity';

@Injectable()
export class ContinentService {
  constructor(
    @InjectRepository(Continent)
    private continentRepository: Repository<Continent>,
  ) {}

  async create(continentData: Partial<Continent>): Promise<Continent> {
    const continent = this.continentRepository.create(continentData);
    return this.continentRepository.save(continent);
  }

  async findAll(): Promise<Continent[]> {
    return this.continentRepository.find({
      relations: ['countries'],
    });
  }

  async findOne(id: number): Promise<Continent> {
    return this.continentRepository.findOne({
      where: { id },
      relations: ['countries'],
    });
  }

  async update(
    id: number,
    continentData: Partial<Continent>,
  ): Promise<Continent> {
    await this.continentRepository.update(id, continentData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.continentRepository.delete(id);
  }
}
