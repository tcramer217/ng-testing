import {Component, OnInit} from '@angular/core';
import {ApiEntry, AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Testing';
  apiEntries: ApiEntry[] = [];

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.getPublicApiEntries();
  }

  getPublicApiEntries() {
    this.service.getPublicApis().subscribe((data) => {
      this.apiEntries = data;
    });
  }
}
