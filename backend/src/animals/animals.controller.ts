import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';


@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) { }

  @Post()
  create(@Body() body: { name: string; dateOfBirth: Date; breed: string; species: string; ownerId: number; color?: string; weight?: number, }) {
    return this.animalsService.create(body.name, body.dateOfBirth, body.breed, body.species, body.ownerId, body.color, body.weight);
  }

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new Error('ID is not a valid number');
    }
    return this.animalsService.findOne(numericId);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name: string; species: string }) {
    return this.animalsService.update(id, body.name, body.species);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.animalsService.remove(id);
  }
}