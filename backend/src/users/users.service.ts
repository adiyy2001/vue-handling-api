import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersModel } from './users.model';

@Injectable()
export class UsersService {

    constructor(private http: HttpService) {}

    public getUsers(): Observable<UsersModel[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
        .pipe(
            map((response: AxiosResponse<UsersModel[]>) => response.data)
        );
    }
}
