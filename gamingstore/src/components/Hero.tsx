export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white py-24 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
        Descubre tu próxima
        <br />
        <span className="text-orange-400">aventura gaming</span>
      </h1>

      <p className="mt-6 max-w-xl mx-auto text-lg text-neutral-200">
        Miles de juegos, DLCs y membresías premium esperándote. Obtén tus
        cupones al instante y comienza a jugar.
      </p>

      {/* estadísticas rápidas */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
        <StatCard number="10K+" label="Juegos disponibles" />
        <StatCard number="500K+" label="Usuarios activos" />
        <StatCard number="Instantáneo" label="Entrega de cupones" />
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-sm px-8 py-6">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-sm text-neutral-200">{label}</p>
    </div>
  );
}
// Este componente Hero es la sección principal de la página de inicio