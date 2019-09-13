import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CollegelistPipe implements PipeTransform {

  is_substring(x, y){
    if(x.length==0){
      return true;
    }else if(y.length==0){
      return false;
    }
    else if(y.charAt(0)==x.charAt(0)){
      return this.is_substring(x.slice(1),y.slice(1));
    }
    else{
      return this.is_substring(x,y.slice(1));
    }
  }

  transform(people: any[], term: any): any {
    // console.log(term);
    //check if search term is undefined
    if(term === undefined) return null;
    if(term === "") return null;
    if(term.length<3) return null;
    //return updates people array

    // var objs: any[] = [];
    // for (let i of people){
    //   if (i.includes(term))
    //     objs.push(i);
    // }
    // console.log(objs);
    // return objs;

    var result:any[]=[];
    for (let i of people){
      if(this.is_substring(String(term),i)){
      result.push(i);}

    }
    return result;

  }

}
