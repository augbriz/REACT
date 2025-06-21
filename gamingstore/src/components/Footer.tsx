// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-sm text-center py-4">
      © {new Date().getFullYear()} Aprendiendo React
    </footer>
  );
}

