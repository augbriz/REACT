// src/components/CategorySection.tsx
import CategoryCard from './CategoryCard';
import type { Category } from '../types/Category';

const categories: Category[] = [
  { id: 'action',    name: 'Acción',    games: 2450, colorFrom: '#ff7e05', colorTo: '#ff1e56' },
  { id: 'rpg',       name: 'RPG',       games: 1820, colorFrom: '#4f58fd', colorTo: '#8f3cff' },
  { id: 'adventure', name: 'Aventura',  games: 1650, colorFrom: '#00d2ff', colorTo: '#3a7bd5' },
  { id: 'strategy',  name: 'Estrategia',games: 980,  colorFrom: '#ff6b00', colorTo: '#ff003d' },
  { id: 'sports',    name: 'Deportes',  games: 1250, colorFrom: '#ff9d00', colorTo: '#ff4e50' },
  { id: 'simulation',name: 'Simulación',games: 890,  colorFrom: '#d946ef', colorTo: '#9f0fff' },
  { id: 'racing',    name: 'Carreras',  games: 720,  colorFrom: '#00bfff', colorTo: '#007aff' },
  { id: 'indie',     name: 'Indie',     games: 1350, colorFrom: '#ff30c0', colorTo: '#ff1493' },
];

export default function CategorySection() {
  return (
    <section className="bg-neutral-900 text-center py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
        Explora por categorías
      </h2>

      {/* Grid responsive:
            1 col  < 640 px
            2 col ≥ 640 px (sm)
            3 col ≥ 768 px (md)
            4 col ≥ 1024 px (lg)
      */}
      <div className="container mx-auto grid gap-8 px-4
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
