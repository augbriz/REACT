// src/types/Category.ts
export interface Category {
  id: string;        // slug único → clave p/ React y rutas futuras
  name: string;      // texto mostrado
  games: number;     // nº de juegos dentro de la categoría
  colorFrom: string; // inicio del gradiente del círculo
  colorTo: string;   // fin del gradiente
}
