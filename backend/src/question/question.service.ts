import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) { }

  async getOldestAnimal() {
    return this.prisma.animal.findFirst({
      orderBy: { dateOfBirth: 'asc' },
      include: { person: true },
    });
  }

  async getMostRepresentedSpecies() {
    return this.prisma.animal.groupBy({
      by: ['species'],
      _count: { species: true },
      orderBy: { _count: { species: 'desc' } },
    });
  }

  async getPersonWithMostAnimals() {
    return this.prisma.person.findFirst({
      include: { animal: true },
      orderBy: { animal: { _count: 'desc' } },
    });
  }

  async getPersonWithMostCats() {
    return this.prisma.person.findFirst({
      where: { animal: { some: { species: 'cat' } } },
      include: {
        animal: { where: { species: 'cat' } },
      },
      orderBy: {
        animal: { _count: 'desc' },
      },
    });
  }

  async getHeaviestAnimal() {
    return this.prisma.animal.findFirst({
      orderBy: { weight: 'desc' },
      include: { person: true },
    });
  }

  async getPersonWithHeaviestGroup() {
    const owners = await this.prisma.person.findMany({
      include: { animal: true },
    });

    const PersonWithHeaviestGroup = owners
      .map(person => ({
        person,
        totalWeight: person.animal.reduce((sum, animal) => sum + (animal.weight?.toNumber() || 0),
          0,)
      }))
      .sort((a, b) => b.totalWeight - a.totalWeight)[0];

    return PersonWithHeaviestGroup;
  }
}