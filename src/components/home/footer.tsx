import { Link } from "@tanstack/react-router";

export function Footer() {
  const links = [
    { label: "Overview", to: "/" },
    { label: "Features", to: "/" },
    { label: "Pricing", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Help", to: "/" },
    { label: "Privacy", to: "/" },
  ];

  return (
    <footer className="w-full bg-white pt-16 pb-12 px-6 sm:px-[60px]">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold tracking-wider uppercase">Raprelics</h2>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
