import { Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  list = ['option 1', 'option 2', 'option 3'];
  genders = ['Male', 'Female', 'Other'];
  showDropDownClg = false;
  showDropDownGen = false;
  chosen = '';
  chosengender = '';

  constructor() {
  }

  form = new FormGroup({});

  ngOnInit() {
  }
  toggleDropDownClg() {
    this.showDropDownClg = !this.showDropDownClg;
  }
  closeDropDownClg() {
    this.showDropDownClg = false;
  }
  printAll() {

  }
  selectValueClg(value) {
    this.chosen = value;
    this.showDropDownGen = false;
  }

  toggleDropDownGen() {
    this.showDropDownGen = !this.showDropDownGen;
  }
  closeDropDownGen() {
    this.showDropDownGen = false;
  }
  printAll() {

  }
  selectValueGen(value) {
    this.chosengender = value;
    this.showDropDownGen = false;
  }
}
