import { Injectable } from '@angular/core';
import * as less from 'less';

@Injectable()
export class LessService {
  constructor() { }

  render(input: string) {
    return less.render(input);
  }
}
