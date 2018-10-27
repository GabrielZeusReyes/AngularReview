import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  public message: string = 'This is a message from the test component.';
  public myID: string = 'messageID';
  public myID2: string = 'messageID2';
  public name: string = 'Gabs';
  public isDisabled: boolean = false;
  public successClass: string = 'text-success';
  public hasError: boolean = false;
  public isSpecial: boolean = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

  // method
  greetMethod(): string {
    return 'Hello this is a method!';
  }

}
