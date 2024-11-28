import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-transformations',
  templateUrl: './character-transformations.component.html',
  styleUrls: ['./character-transformations.component.css']
})
export class CharacterTransformationsComponent {

  transformations: any[] = [];
  characterName: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    // Obtener el ID del personaje desde la URL
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.apiService.getCharacterById(characterId).subscribe({
        next: (data) => {
          this.transformations = data.transformations || [];
          this.characterName = data.name;
        },
        error: (error) => console.error('Error loading transformations:', error)
      });
    }
  }

}
