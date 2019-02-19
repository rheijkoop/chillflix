import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe<T> implements PipeTransform {
    transform(values: T[], filterFn: (item: T) => T): T[] {
        return values.filter(filterFn);
    }
}
