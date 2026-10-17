import { useMemo, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategorySection from "./components/CategorySection.jsx";
import CropCard from "./components/CropCard.jsx";
import CropDetails from "./components/CropDetails.jsx";
import ProductSection from "./components/ProductSection.jsx";
import Footer from "./components/Footer.jsx";

import { crops } from "./data/crops.js";
import { products } from "./data/products.js";
import { translations } from "./data/translations.js";

import { Search, Sprout, X } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("bn");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCrop, setSelectedCrop] = useState(null);

  const t = translations[lang] || translations.bn;

  const filteredCrops = useMemo(() => {
    const query = search.trim().toLowerCase();

    return crops.filter((crop) => {
      const matchesCategory =
        activeCategory === "all" ||
        crop.category === activeCategory;

      const searchableText = [
        crop.name.en,
        crop.name.bn,
        crop.name.hi,
        crop.name.ar,
        crop.name.es,
        crop.description.en,
        crop.description.bn
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory &&
        (!query || searchableText.includes(query));
    });
  }, [search, activeCategory]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    document.getElementById("crops")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fbf7]">
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
      />

      <main>
        <Hero t={t} />

        <CategorySection
          t={t}
          onSelect={handleCategorySelect}
        />

        <section id="crops" className="py-16 sm:py-20">
          <div className="container-width">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-2xl">
                <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-700">
                  <Sprout size={17} />
                  {t.guides}
                </p>

                <h2 className="text-3xl font-extrabold text-green-950 sm:text-4xl">
                  {t.popular}
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {t.popularText}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearch("");
                }}
                className="rounded-xl border border-green-200 bg-white px-5 py-3 font-semibold text-green-800 transition hover:bg-green-50"
              >
                {t.viewAll}
              </button>
            </div>

            <div className="mb-7 flex flex-wrap gap-2">
              {[
                { id: "all", label: t.viewAll },
                { id: "vegetables", label: t.vegetables },
                { id: "fruits", label: t.fruits },
                { id: "grains", label: t.grains }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    activeCategory === item.id
                      ? "bg-green-800 text-white"
                      : "border border-green-100 bg-white text-gray-700 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {search && (
              <div className="mb-6 flex items-center justify-between gap-3 rounded-xl bg-white p-3 text-sm text-gray-600">
                <span>
                  <Search size={16} className="mr-2 inline" />
                  {search}
                </span>

                <button
                  onClick={() => setSearch("")}
                  className="rounded-lg p-2 hover:bg-green-50"
                  aria-label={t.close}
                >
                  <X size={17} />
                </button>
              </div>
            )}

            {filteredCrops.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCrops.map((crop) => (
                  <CropCard
                    key={crop.id}
                    crop={crop}
                    lang={lang}
                    t={t}
                    onDetails={setSelectedCrop}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-green-200 bg-white px-5 py-16 text-center">
                <Search className="mx-auto mb-4 text-green-700" size={36} />
                <p className="font-semibold text-gray-700">
                  {t.searchEmpty}
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 rounded-xl bg-green-700 px-5 py-3 font-bold text-white"
                >
                  {t.viewAll}
                </button>
              </div>
            )}
          </div>
        </section>

        <ProductSection
          products={products}
          lang={lang}
          t={t}
        />

        <section id="guides" className="py-16 sm:py-20">
          <div className="container-width">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-green-900 p-7 text-white sm:p-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  <Sprout size={18} />
                  {t.safety}
                </span>

                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  {t.guides}
                </h2>

                <p className="mt-5 leading-8 text-green-50">
                  {t.safetyText}
                </p>

                <a
                  href="#crops"
                  className="mt-7 inline-flex rounded-xl bg-lime-400 px-6 py-3 font-bold text-green-950 hover:bg-lime-300"
                >
                  {t.explore} →
                </a>
              </div>

              <div className="h-64 overflow-hidden rounded-2xl sm:h-80">
                <img
                  src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85"
                  alt="Green agricultural crops"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />

      <CropDetails
        crop={selectedCrop}
        lang={lang}
        t={t}
        onClose={() => setSelectedCrop(null)}
      />
    </div>
  );
}