import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  list = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
  showDropDown = false;
  college = 'Select Your College ';
  inputOff = true;

  constructor() {
  }

  form = new FormGroup({});

  ngOnInit() {
  }
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;

  }
  printAll() {

  }
  selectValue(value) {
    this.college = value;
    console.log(this.college);
    this.showDropDown = false;
    // this.stateForm.patchValue({search: value});
  }
}
