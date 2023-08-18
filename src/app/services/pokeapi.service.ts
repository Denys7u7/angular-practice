import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private htpClient: HttpClient) {}

  getPikachuInformation(): Observable<{}> {
    return this.htpClient.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  }
}
