import { TestBed } from '@angular/core/testing';

import {ApiEntry, AppService} from './app.service';
import Spy = jasmine.Spy;
import SpyObj = jasmine.SpyObj;
import {HttpClient} from "@angular/common/http";

describe('AppService', () => {
  let service: AppService;
  let httpClientSpy: SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AppService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
