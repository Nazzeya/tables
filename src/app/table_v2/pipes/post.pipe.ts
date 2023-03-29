import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/models/post';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(values: Post[], filter: string): Post[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Post) => {
      const titleFound =
        value.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const bodyFound =
        value.body.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      if (titleFound || bodyFound) {
        return value;
      } else {
        return 0;
      }
    });
  }
}
