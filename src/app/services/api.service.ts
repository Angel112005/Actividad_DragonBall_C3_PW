import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { map } from 'rxjs/operators';

// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  // Obtener todos los personajes
  // Obtener todos los personajes
  getCharacters(): Observable<Character[]> {
    return this.http.get<{ items: Character[] }>(this.baseUrl).pipe(
      map(response => response.items) // Extrae el array `items` de la respuesta
    );
  }


  // Obtener los detalles de un personaje por su ID
  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
