import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonService } from './person.service';


@Controller('owners')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() body: { lastName:string; firstName: string; phoneNumber: string; email: string }) {
    return this.personService.create(body.firstName,body.lastName,body.phoneNumber,body.email);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: string) {
  const personId = parseInt(id, 10);
  if (isNaN(personId)) {
    throw new Error('ID is not a valid number');
  }
  return this.personService.findOne(personId);
}

  @Put(':id')
  update(@Param('id') id: number, @Body() body:{ lastName:string; firstName: string; phoneNumber: string; email: string }) {
    return this.personService.update(id,body.firstName,body.lastName,body.phoneNumber,body.email);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personService.remove(id);
  }
}