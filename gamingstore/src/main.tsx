import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import AppLayout from './components/AppLayout';
import Library from './pages/Library';
import Memberships from './pages/Memberships';
import Dlcs from './pages/Dlcs';
import NotFound from './pages/NotFound';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ---------- RUTA PADRE ---------- */}
        <Route element={<AppLayout />}>
        {/* Hijas: comparten header + footer */}
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/dlcs" element={<Dlcs />} />
        <Route path="*" element={<NotFound />} />
        {/* rutas futuras */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);