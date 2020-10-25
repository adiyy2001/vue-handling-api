import { HttpService, Injectable, Response } from '@nestjs/common';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { PostsModel } from './posts.model';
import { GetPostsFilterDto } from 'src/dto/get-posts-filter-dto';

@Injectable()
export class PostsService {
    constructor(private http: HttpService) { }

    public getPosts(): Promise<PostsModel[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/todos')
            .pipe(
                map((response: AxiosResponse<PostsModel[]>) => response.data)
            ).toPromise();
    }

    public getPostsWithFilter(filterDto: GetPostsFilterDto) {
        const { title, status } = filterDto;

        let posts = this.getPosts().then(response => {
            if (status) {
               response = response.filter((post: PostsModel) => post.completed.toString() === status) 
               console.log(response.length)
            }
            if (title) {
               response = response.filter((post: PostsModel) => post.title.includes(title))
            }
            return response
        })
        return posts

    }
}
