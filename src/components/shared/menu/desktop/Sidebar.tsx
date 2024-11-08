import { NavLinks } from "./NavLinks"

export const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 hidden md:flex flex-col border-r-2 top-0 sticky h-screen md:gap-8">
      <header className="flex items-center gap-3">
        <img src="/logo.navegacion.svg" alt="logo.navegacion" className="size-10" />
        <span className="text-lg font-bold">Navegación</span>
      </header>

      <nav role="navigation">
        <NavLinks />
      </nav>
    </aside>
  );
};