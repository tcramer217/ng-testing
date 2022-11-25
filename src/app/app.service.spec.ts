import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import {ApiEntry, AppService} from './app.service';
import Spy = jasmine.Spy;
import SpyObj = jasmine.SpyObj;
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppComponent} from "./app.component";

describe('AppService', () => {
  let service: AppService;
  let httpClientSpy: SpyObj<HttpClient>;
  let apiEntry: ApiEntry = {
    category: "category",
    createdAt: "31-12-2022",
    description: "Description",
    id: 0,
    image: "url",
    name: "Name",
    price: "$123.45",
    productId: 12345
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(Array.of(apiEntry)));
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppService
      ],
      providers: [{provide: HttpClient, useValue: httpClientSpy}]
    });
    service = new AppService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.get', () => {
    service.getPublicApis();
    expect(httpClientSpy.get).toHaveBeenCalled();
  });

  it('should make an async call returning data', fakeAsync(() => {
    service.getPublicApis().subscribe((data) => {
      expect(data).toEqual(Array.of(apiEntry));
    });
  }))
});
