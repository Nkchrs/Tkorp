import { Module } from '@nestjs/common';
import { PersonController} from './person.controller';
import { PersonService } from './person.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}