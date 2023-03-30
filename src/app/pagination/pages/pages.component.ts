import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  p: number = 1;
  posts: Post[] = [];
      
  constructor(private httpService: HttpService){}
      
  ngOnInit(){
      this.httpService.getPosts().subscribe({next:(data:any) => this.posts= data});
  }
}
