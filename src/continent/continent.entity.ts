import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Country } from '../country/country.entity';

@Entity('continents')
export class Continent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  name: string;

  @Column({ nullable: true, length: 3 })
  code: string;

  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}