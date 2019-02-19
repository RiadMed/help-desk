import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormat',
    pure: false
})
export class DateFormatPipe implements PipeTransform {
    transform(value: Date): any {
        return value.toLocaleDateString();
    }
}