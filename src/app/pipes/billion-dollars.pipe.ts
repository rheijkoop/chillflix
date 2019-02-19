import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'billionDollars'
})
export class BillionDollarsPipe implements PipeTransform {
    transform(value: number, args?: any): string {
        return value >= 1000000000 ? `$ ${value / 1000000000} billion dollars` : value.toString();
    }
}
