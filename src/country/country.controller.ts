import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() countryData: Partial<Country>) {
    return this.countryService.create(countryData);
  }

  @Get()
  findAll(@Query('continent') continentId?: string) {
    if (continentId) {
      return this.countryService.findByContinent(+continentId);
    }
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() countryData: Partial<Country>) {
    return this.countryService.update(+id, countryData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
