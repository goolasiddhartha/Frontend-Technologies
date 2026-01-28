import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,Sname:string): any {
    if(Sname=="")
    {
      return value;
    }

    const playersArray:any[]=[];
    for(let i=0;i<value.length;i++)
    {
      let TeamName:string=value[i].Team;
      if(TeamName.startsWith(Sname)){
        playersArray.push(value[i])
      }
    }
  return playersArray;
  }

}
