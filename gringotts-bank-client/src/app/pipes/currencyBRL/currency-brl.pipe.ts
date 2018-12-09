import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL'
})
export class CurrencyBRLPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
