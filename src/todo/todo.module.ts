import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService], // module 에 넣어야 사용 가능
})
export class TodoModule {}
