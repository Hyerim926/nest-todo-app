import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('hey api')
    .setDescription('hey api 입니다')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
