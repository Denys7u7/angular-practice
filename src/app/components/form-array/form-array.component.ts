import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  /* form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([]),
  }); */

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      contact: formBuilder.group({
        email: [],
        phone: [],
      }),
      topics: formBuilder.array([]),
    });
  }

  ngOnInit(): void {}

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: AbstractControl) {
    this.topics.removeAt(this.topics.controls.indexOf(topic));
  }
}
