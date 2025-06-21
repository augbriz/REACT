import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-neutral-900 text-white">
      <nav className="container mx-auto flex items-center gap-6 p-4">
        <span className="text-2xl font-bold text-purple-400 flex items-center gap-2">
          {/* Emoji modo placeholder → luego lo cambiamos por un ícono SVG */}
          🎮 <span>GameHub</span>
        </span>

        <NavLink to="/" className="hover:text-purple-300">
          Tienda
        </NavLink>
        <NavLink to="/library" className="hover:text-purple-300">
          Biblioteca
        </NavLink>
        <NavLink to="/memberships" className="hover:text-purple-300">
          Membresías
        </NavLink>
        <NavLink to="/dlcs" className="hover:text-purple-300">
          DLCs
        </NavLink>

        {/* grow empuja al buscador a la derecha */}
        <div className="flex-1" />

        {/* placeholder buscador */}
        <input
          type="search"
          placeholder="Buscar juegos, DLCs, membresías..."
          className="w-72 rounded-md bg-neutral-800 px-3 py-1 text-sm outline-none placeholder:text-neutral-500"
        />

        {/* íconos carrito y usuario → placeholder Unicode */}
        <button className="text-lg">🛒</button>
        <button className="text-lg">👤</button>
      </nav>
    </header>
  );
}
