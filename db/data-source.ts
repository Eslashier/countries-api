import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Continent } from '../src/continent/continent.entity';
import { Country } from '../src/country/country.entity';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'countries_db',
  entities: [Continent, Country],
  migrations: ['db/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
});
