import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressive-rendering',
  templateUrl: './progressive-rendering.component.html',
  styleUrls: ['./progressive-rendering.component.scss']
})
export class ProgressiveRenderingComponent implements OnInit {
  // itemsAtOnce: количество компонентов, которые будут показываться за раз
  // intervalLength: время(интервал) между показами

  public longList: any[] = [];
  public show = false;

  ngOnInit() {
   const longList = [];
   for (let i = 0; i < 50000; i++) {
     longList.push({ id: i });
   }
   this.longList = longList;
  }

  public toggleShow() {
    this.show = !this.show;
  }


}
