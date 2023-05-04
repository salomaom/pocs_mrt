import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringfy',
})
export class StringfyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify(value);
  }
}
