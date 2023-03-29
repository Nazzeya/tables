import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post';

  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getPosts() : Observable<Post[]> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((data:any) => {
        let postList = [].slice.call(data);
        return postList;
        }));
    }
}