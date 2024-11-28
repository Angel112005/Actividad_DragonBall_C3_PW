import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  characters: Character[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        console.log("Characters loaded:", data);  
      },
      error: (error) => console.error('There was an error!', error)
    });
  }

}
