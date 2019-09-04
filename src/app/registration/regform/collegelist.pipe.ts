import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collegelist'
})
export class CollegelistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
