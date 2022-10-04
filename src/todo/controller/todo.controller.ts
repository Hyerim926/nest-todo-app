import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }

  @Get(':id')
  async fetchOneTodo(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.fetchOneTodo(id);
  }

  @Delete(':id')
  async deleteOneTodo(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteOneTodo(id);
  }

  @Post()
  async addOneTodo(@Body() data: Todo): Promise<Todo> {
    return this.todoService.addOneTodo(data);
  }

  @Put(':id')
  async updateOneTodo(
    @Param('id') id: number,
    @Body() data: Todo,
  ): Promise<Todo | null> {
    return this.todoService.updateOneTodo(
      id,
      data.title,
      data.content,
      data.is_done,
    );
  }
}
