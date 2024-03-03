import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(bodyText: string, textLength:number) {
    if(bodyText.length > textLength){
      return bodyText.slice(0,textLength) + '...';
    }else{
      return bodyText;
    }
  }
}
