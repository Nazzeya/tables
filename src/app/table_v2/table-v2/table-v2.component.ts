import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HttpService } from 'src/app/services/http.service';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from 'src/app/table_v2/directives/sortable-header.directive';

@Component({
  selector: 'app-table-v2',
  templateUrl: './table-v2.component.html',
  styleUrls: ['./table-v2.component.scss']
})
export class TableV2Component implements OnInit {

  filter!: string;
  posts: Post[] = [];
  data: Post[]=[]


  @ViewChildren(SortableHeaderDirective)
  headers!: QueryList<SortableHeaderDirective>;
    
  constructor(private httpService: HttpService){}

  onSort({ column, direction }: SortEvent) {
  // resetting other headers
  this.headers.forEach((header) => {
    if (header.sortable !== column) {
      header.direction = '';
    }
  });

  // sorting
  if (direction === '' || column === '') {
    this.posts = this.data;
  } else {
    this.posts = [...this.data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}
      
  ngOnInit(){
      this.httpService.getPosts().subscribe({next:(data:any) => this.posts = data});
      this.httpService.getPosts().subscribe({next:(data:any) => this.data = data});//for filtering
  }


}
