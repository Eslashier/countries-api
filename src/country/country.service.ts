import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async create(countryData: Partial<Country>): Promise<Country> {
    const country = this.countryRepository.create(countryData);
    return this.countryRepository.save(country);
  }

  async findAll(): Promise<Country[]> {
    return this.countryRepository.find({
      relations: ['continent'],
    });
  }

  async findOne(id: number): Promise<Country> {
    return this.countryRepository.findOne({
      where: { id },
      relations: ['continent'],
    });
  }

  async findByContinent(continentId: number): Promise<Country[]> {
    return this.countryRepository.find({
      where: { continentId },
      relations: ['continent'],
    });
  }

  async update(id: number, countryData: Partial<Country>): Promise<Country> {
    await this.countryRepository.update(id, countryData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.countryRepository.delete(id);
  }
}