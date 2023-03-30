import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  post: any = [];

  ngOnInit(): void {
    for(let i=1; i<=100; i++ ){
      this.post.push(i)
    }

    console.log(this.post)
  }

  onScroll() { //ngx-infinite-scroll
    const length = this.post.length; 
    setTimeout(() => {
      const p: any = ' '.repeat(100).split('').map((s, i) => i+1+length);
      while(p.length) this.post.push(p.shift())
    }, 1000);

  }

}
