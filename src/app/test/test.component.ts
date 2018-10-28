import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  public greetings: string = '';
  public fullName: string = 'asdas';
  public isShowing: boolean = true;
  public color: string = '';
  public listofUsers: Array<any> = [
    { fname: 'John', lname: 'Smith', age: '28' },
    { fname: 'Jane', lname: 'Doe', age: '26' },
    { fname: 'Juan', lname: 'Dela Cruz', age: '24' },
  ];
  public date = new Date;

  // pass data from child component to parent component
  @Output() public childEvent = new EventEmitter();

  @Input() public parentData: string;

  constructor() { }

  ngOnInit() {
  }

  // method
  greetMethod(): string {
    return 'Hello this is a method!';
  }

  callClick(event) {
    console.log(event);
    this.greetings = `Hello! I'm from a clicked event!`;
  }

  logMessage(el: any) {
    console.log(el.value);
  }

  toggleMe() {
    this.isShowing = !this.isShowing;
  }

  fireEvent() {
    this.childEvent.emit('Hey parent! - from child.');
  }

}
