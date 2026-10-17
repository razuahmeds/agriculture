import { useState } from "react";
import {
  Sprout,
  Search,
  Menu,
  X,
  Globe
} from "lucide-react";
import { languageOptions } from "../data/translations";

export default function Navbar({
  t,
  lang,
  setLang,
  search,
  setSearch
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.home, href: "#home" },
    { label: t.crops, href: "#crops" },
    { label: t.products, href: "#products" },
    { label: t.guides, href: "#guides" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur-md">
      <div className="container-width flex min-h-[76px] items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 text-white">
            <Sprout size={27} />
          </span>
          <span>
            <span className="block text-lg font-extrabold text-green-900">
              {t.brand}
            </span>
            <span className="hidden text-xs text-gray-500 sm:block">
              {t.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2">
            <Search size={17} className="text-gray-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.search}
              className="w-36 bg-transparent text-sm outline-none lg:w-44"
              aria-label={t.search}
            />
          </label>

          <label className="flex items-center gap-1 rounded-xl bg-green-50 px-2 py-2">
            <Globe size={17} className="text-green-700" />
            <select
              value={lang}
              onChange={(event) => setLang(event.target.value)}
              className="max-w-24 bg-transparent text-sm font-semibold outline-none"
              aria-label={t.language || "Language"}
            >
              {languageOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-green-100 p-2 text-green-800 lg:hidden"
          aria-label={t.menu}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-green-100 bg-white p-4 lg:hidden">
          <div className="container-width flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700"
              >
                {link.label}
              </a>
            ))}

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.search}
              className="rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-green-500"
            />

            <select
              value={lang}
              onChange={(event) => setLang(event.target.value)}
              className="rounded-xl border border-gray-200 px-3 py-3"
            >
              {languageOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}