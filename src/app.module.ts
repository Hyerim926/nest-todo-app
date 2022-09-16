import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { PostsModule } from './posts/posts.module';

// 의존성 주입하는 부분
@Module({
  imports: [PostsModule],
  controllers: [AppController, TodosController],
  providers: [AppService], // 여기서 의존성 주입을 해줘야 controller 에서 사용 가능
})
export class AppModule {}
