import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) { }


  async create(name: string, dateOfBirth: Date, breed: string, species: string, ownerId: number, color?: string, weight?: number,) {
    return this.prisma.animal.create({
      data: {
        name,
        dateOfBirth,
        breed,
        species,
        ownerId,
        color,
        weight,
      },
    });
  }


  async findAll() {
    return this.prisma.animal.findMany({
      include: { person: true },
    });
  }


  async findOne(id: number) {
    return this.prisma.animal.findUnique({
      where: { id: id },
      include: { person: true },
    });
  }


  async update(id: number, name: string, species: string) {
    return this.prisma.animal.update({
      where: { id },
      data: {
        name,
        species,
      },
    });
  }


  async remove(id: number) {
    return this.prisma.animal.delete({
      where: { id },
    });
  }
}