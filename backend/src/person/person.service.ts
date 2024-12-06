import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

 
  async create(lastName: string, firstName: string, email: string, phoneNumber:string,) {
    return this.prisma.person.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
    });
  }

  async findAll() {
    return this.prisma.person.findMany({
      include: { animal: true },  
    });
  }


  async findOne(id: number) {
    return this.prisma.person.findUnique({
      where: { id },
      include: { animal: true },
    });
  }

 
  async update(id: number,firstName, lastName: string, email: string,phoneNumber:string,) {
    return this.prisma.person.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.person.delete({
      where: { id },
    });
  }
}