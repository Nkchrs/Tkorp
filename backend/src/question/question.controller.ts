import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) { }

  @Get('oldest-animal')
  async getOldestAnimal() {
    return this.questionService.getOldestAnimal();
  }

  @Get('most-represented-species')
  async getMostRepresentedSpecies() {
    return this.questionService.getMostRepresentedSpecies();
  }

  @Get('person-most-animals')
  async getPersonWithMostAnimals() {
    return this.questionService.getPersonWithMostAnimals();
  }

  @Get('person-most-cats')
  async getPersonWithMostCats() {
    return this.questionService.getPersonWithMostCats();
  }

  @Get('heaviest-animal')
  async getHeaviestAnimal() {
    return this.questionService.getHeaviestAnimal();
  }

  @Get('person-heaviest-group')
  async getPersonWithHeaviestGroup() {
    return this.questionService.getPersonWithHeaviestGroup();
  }
}