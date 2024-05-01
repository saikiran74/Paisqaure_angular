import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}