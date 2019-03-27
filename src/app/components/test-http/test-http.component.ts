import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styles: []
})
export class TestHttpComponent implements OnInit {

  elements: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp(`http://localhost/test_api/`, 'callback_function')
    .subscribe( elements => this.elements = elements);
  }

}
