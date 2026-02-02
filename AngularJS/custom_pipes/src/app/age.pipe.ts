import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentYear=new Date().getFullYear()
    let birthYear=new Date(value).getFullYear()

    return currentYear-birthYear;
  }

}


