import { TestBed } from '@angular/core/testing';
import {AppModule} from "./app.module";


describe('AppModule', () => {
  let module: AppModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    module = TestBed.inject(AppModule);
  });

  it('should be created', () => {
    expect(module).toBeTruthy();
  });
});
