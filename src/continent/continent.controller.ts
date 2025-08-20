import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { Continent } from './continent.entity';

@Controller('continents')
export class ContinentController {
  constructor(private readonly continentService: ContinentService) {}

  @Post()
  create(@Body() continentData: Partial<Continent>) {
    return this.continentService.create(continentData);
  }

  @Get()
  findAll() {
    return this.continentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.continentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() continentData: Partial<Continent>) {
    return this.continentService.update(+id, continentData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.continentService.remove(+id);
  }
}