import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Continent } from '../continent/continent.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 2 })
  code: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, length: 100 })
  capital: string;

  @Column({ nullable: true })
  population: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  area: number;

  @ManyToOne(() => Continent, (continent) => continent.countries)
  @JoinColumn({ name: 'continentId' })
  continent: Continent;

  @Column({ nullable: true })
  continentId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
