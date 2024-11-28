import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<{items: Character[]}>(this.baseUrl)
      .pipe(
        map(response => response.items)
      );
  }
}
