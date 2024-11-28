export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  transformations?: Transformation[]; // Propiedad opcional para las transformaciones
}

// Interfaz para las transformaciones
export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
}