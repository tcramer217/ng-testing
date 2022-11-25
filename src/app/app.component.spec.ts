import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {ApiEntry, AppService} from "./app.service";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {
  let appServiceSpy: SpyObj<AppService>;
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
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
  let getPublicApisSpy: jasmine.Spy<AppService["getPublicApis"]>;
  beforeEach(async () => {
    appServiceSpy = jasmine.createSpyObj('AppService', ['getPublicApis']);
    getPublicApisSpy = appServiceSpy.getPublicApis.and.returnValue(of(Array.of(apiEntry)));
    let testBed = TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: AppService, useValue: appServiceSpy}]
    });
    fixture = testBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  afterEach(() => {

  })

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'Testing'`, () => {
    expect(appComponent.title).toEqual('Testing');
  });

  it('should get 1 api call', () => {
    spyOn(appComponent, 'getPublicApiEntries');
    appComponent.ngOnInit();
    expect(appComponent.getPublicApiEntries).toHaveBeenCalled();
  })

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toEqual('Api Entries');
  });

  it('should render an item', () => {
    appComponent.ngOnInit(); // initialize component
    fixture.detectChanges(); // update fixture
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.entry-name')?.textContent).toEqual('Name');
  })
});
