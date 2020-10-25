import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetPostsFilterDto } from 'src/dto/get-posts-filter-dto';

@Controller('posts')
export class PostsController {

    constructor(private PostsService: PostsService) {}

    @Get()
    getPosts(@Query(ValidationPipe) filterDto: GetPostsFilterDto) {
        if(Object.keys(filterDto).length) {
            return this.PostsService.getPostsWithFilter(filterDto);
        } else {
            return this.PostsService.getPosts();
        }
    }
}
