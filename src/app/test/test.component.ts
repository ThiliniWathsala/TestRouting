import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
    test is working
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
