import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  template!: TemplateDriven;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  ngOnInit(): void {}

  log = (s: any) => console.log(s);

  submit = (form: NgForm) => {
    this.template = <TemplateDriven>form.value;
    this.log(form);
    //this.clear(form);
  };

  clear = (form: NgForm) => {
    form.onReset();
  };
}

interface TemplateDriven {
  comment: string;
  email: string;
  names: {
    firtsName: string;
    secondName: string;
  };
}
