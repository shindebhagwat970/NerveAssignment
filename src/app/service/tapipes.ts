import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({  name: 'smallerdate' })
export class SmallerDatePipe implements PipeTransform {
  transform(DateString: string ) {
    return (  DateString.replace(/-/g, ' '));
 }
}

@Pipe({
  name: 'CapitalizeFirstLetter'
})
export class CapitalizeFirstLetter implements PipeTransform{
  transform(value:string): string {
    const str = value || ''
    let first = str.substr(0,1).toUpperCase();
    return first + str.substr(1); 
  }
}