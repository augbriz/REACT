import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import { useCartStore } from '../store/useCartStore';

// export default function Home() {
 // return (
 //   <>
 //     <Hero />
 //     <CategorySection />
 //     {/* más secciones vendrán aquí (categorías, etc.) */}
 //   </>
//  );
//}

export default function Home() {
  // --- 2) OBTÉN LA ACCIÓN -------------------
  // el selector devuelve sola la función 'add'
  const add = useCartStore((state) => state.add);

  // --- 3) RETORNA EL JSX --------------------
  return (
    <>
      <Hero />
      <CategorySection />

      {/* BOTÓN TEMPORAL PARA PRUEBA */}
      <div className="flex justify-center my-12">
        <button
          onClick={() =>
            add({
              id: 'demo',
              name: 'Cupón Demo',
              price: 9.99,
            })
          }
          className="rounded bg-green-600 px-6 py-3 text-white font-semibold
                     hover:bg-green-700 transition"
        >
          Añadir cupón demo al carrito
        </button>
      </div>
    </>
  );
}