import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionPipe'
})
export class RegionPipePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    return value.regionPipe(function(search:any)  {
     return search.name.toLowercase().indexOf(searchText.toLowercase())>-1
    })
  }

}
