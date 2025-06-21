// src/components/AppLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * AppLayout:
 *  - Se dibuja una sola vez.
 *  - Contiene UI común (header y footer).
 *  - <Outlet /> es el "agujero" donde React Router
 *    colocará la página hija que corresponda a la URL.
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/*             PÁGINA ESPECÍFICA            */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
