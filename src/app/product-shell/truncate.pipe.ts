import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Amr',
})
export class TruncatePipe implements PipeTransform {
  transform(text: any, length: number = 10, suffix: string = '...'): string {
    /* check type of text */
    if (
      (typeof text === 'string' || text instanceof String) &&
      !text.includes('MacBook')
    ) {
      // todo ???
    } else if (typeof text === 'number' || text instanceof Number) {
      text = text.toString();
    } else if (this.isArrayOfStrings(text)) {
      text = text.join(', ');
    } else if (this.isArrayOfNumbers(text)) {
      text = text.toString();
    }

    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }

    return text;
  }

  isArrayOfStrings(value: any): boolean {
    return (
      Array.isArray(value) && value.every((item) => typeof item === 'string')
    );
  }

  isArrayOfNumbers(value: any): boolean {
    return (
      Array.isArray(value) && value.every((item) => typeof item === 'number')
    );
  }
}
