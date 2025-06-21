// src/components/CategoryCard.tsx
import type { Category } from '../types/Category';

interface Props {
  category: Category;
}
export default function CategoryCard({ category }: Props) {
    return (
    <div className="rounded-xl bg-neutral-800/60 p-6 flex flex-col items-center gap-4 hover:bg-neutral-700 transition-colors">
      {/* Círculo degradado */}
      <div
        className="w-14 h-14 rounded-full grid place-items-center text-white text-xl font-bold"
        style={{
          background: `linear-gradient(135deg, ${category.colorFrom}, ${category.colorTo})`,
        }}
      >
        {category.name[0].toUpperCase()}
      </div>

      {/* Texto */}
      <p className="font-semibold text-neutral-100">{category.name}</p>
      <p className="text-sm text-neutral-400">
        {category.games.toLocaleString()} juegos
      </p>
    </div>
  );
}