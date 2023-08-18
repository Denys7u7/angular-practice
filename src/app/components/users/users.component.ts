import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectPikachu } from 'src/app/ngrx/selectors/counter.selector';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users = [];
  userSelected: any;
  form!: FormGroup;
  subscription!: Subscription;
  pikachu$ = this.store.select(selectPikachu);
  constructor(usersService: UsersService, private store: Store) {
    this.form = new FormGroup({
      users: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });

    usersService.getUsers().subscribe({
      next: (users) => (this.users = users),
    });
  }

  submit() {
    this.userSelected = this.form.get('users')?.value;
  }

  selectGender() {
    this.form.controls['gender'].setValue(
      this.form.controls['users'].value['gender']
    );
  }

  ngOnInit(): void {
    this.subscription = this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
