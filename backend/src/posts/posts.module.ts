import { HttpModule, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    })
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
