import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AnimalsModule } from './animals/animals.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionController } from './question/question.controller';
import { QuestionModule } from './question/question.module';


@Module({
  imports: [PersonModule, AnimalsModule,PrismaModule,QuestionModule],
  controllers: [AppController, QuestionController],
  providers: [AppService],
})
export class AppModule {}