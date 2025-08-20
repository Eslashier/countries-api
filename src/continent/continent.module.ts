import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContinentService } from './continent.service';
import { ContinentController } from './continent.controller';
import { Continent } from './continent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  controllers: [ContinentController],
  providers: [ContinentService],
  exports: [ContinentService],
})
export class ContinentModule {}
