import { PackageCheck, ShieldCheck } from "lucide-react";

export default function ProductSection({ products, lang, t }) {
  return (
    <section id="products" className="bg-white py-16 sm:py-20">
      <div className="container-width">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-700">
              <PackageCheck size={17} className="mr-2 inline" />
              {t.products}
            </p>

            <h2 className="text-3xl font-extrabold text-green-950 sm:text-4xl">
              {t.suppliesTitle}
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {t.suppliesText}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
            <ShieldCheck size={18} />
            Responsible Farming
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden bg-green-50">
                <img
                  src={product.image}
                  alt={product.name[lang] || product.name.en}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                  {product.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-green-950">
                  {product.name[lang] || product.name.en}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-amber-950">{t.safety}</h3>
          <p className="mt-2 text-sm leading-7 text-amber-900">
            {t.safetyText}
          </p>
        </div>
      </div>
    </section>
  );
}