import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherService {

  constructor() { }

  someMethod(a:number, b:number): number {
    return a + b;
  }
}
