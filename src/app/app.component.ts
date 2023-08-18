import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  personas = [
    {
      id: 5,
      name: 'Alexander',
      frutaFavorita: 'Manzana',
    },
    {
      id: 2,
      name: 'Joaquin',
      frutaFavorita: 'Pera',
    },
    {
      id: 3,
      name: 'Denys',
      frutaFavorita: 'Mango',
    },
    {
      id: 7,
      name: 'Walter',
      frutaFavorita: 'Mango',
    },
    {
      id: 9,
      name: 'Larin',
      frutaFavorita: 'Uva',
    },
  ];

  numeros = [1, 2, 3, 4, 1, 2, 1];

  obj = {
    name: 'William',
    surname: 'Reyes',
    edad: '21',
    genero: 'idenfinido',
    llave: 'llave',
  };

  form!: FormGroup;
  name: string = 'William';
  surname: string = 'Reyes';
  title: string = 'Hola mundo';
  pikachu: any;

  constructor(pokeapiService: PokeapiService) {
    this.pikachu = pokeapiService.getPikachuInformation();
    /* pokeapiService.getPikachuInformation().subscribe({
      next: (data) => (this.pikachu = data),
    }); */
    this.form = new FormGroup({
      name: new FormControl(
        {
          value: 'William',
          disabled: true,
        },
        Validators.required
      ),
      surname: new FormControl('reyes', [
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
        ),
      ]),
    });

    Object.keys(this.form.controls).forEach((k) => {
      //console.log(this.form.controls[k].value);
    });

    /* this.form.valueChanges.subscribe({
      next: (value) => console.log(value),
    }); */

    /* console.log(this.personas);

    let map = this.numeros.filter((p) => p === 2);
    console.log(map); */
    /* 
    Object.keys(this.obj).forEach((k) => {
      console.log(k);
    }); */
  }

  showData(): void {
    alert(this.name);
    alert(this.surname);
  }
}
