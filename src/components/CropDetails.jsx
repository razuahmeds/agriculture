import { useEffect } from "react";
import {
  X,
  Sprout,
  Droplets,
  Shovel,
  CalendarDays,
  CheckCircle2,
  Leaf
} from "lucide-react";

export default function CropDetails({ crop, lang, t, onClose }) {
  useEffect(() => {
    if (!crop) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [crop, onClose]);

  if (!crop) return null;

  const name = crop.name[lang] || crop.name.en;
  const description =
    crop.description[lang] ||
    crop.description.en ||
    "";

  const sections = [
    {
      title: t.steps,
      icon: Sprout,
      items: crop.steps
    },
    {
      title: t.inputs,
      icon: Shovel,
      items: crop.inputs
    },
    {
      title: t.care,
      icon: CheckCircle2,
      items: crop.care
    }
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-green-950/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="crop-title"
        className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label={t.close}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-green-950 shadow-lg transition hover:bg-green-50"
        >
          <X size={22} />
        </button>

        <div className="relative h-60 sm:h-80">
          <img
            src={crop.image}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <span className="mb-2 inline-block rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-green-950">
              {t[crop.category] || t.crops}
            </span>
            <h2 id="crop-title" className="text-3xl font-extrabold sm:text-4xl">
              {name}
            </h2>
            <p className="mt-2 text-sm text-green-50">{description}</p>
          </div>
        </div>

        <div className="grid gap-4 border-b border-green-100 p-5 sm:grid-cols-3 sm:p-7">
          <div className="rounded-2xl bg-green-50 p-4">
            <CalendarDays className="mb-3 text-green-700" size={24} />
            <p className="text-sm text-gray-500">{t.days}</p>
            <p className="mt-1 font-bold text-green-950">{crop.days}</p>
          </div>

          <div className="rounded-2xl bg-green-50 p-4">
            <Shovel className="mb-3 text-green-700" size={24} />
            <p className="text-sm text-gray-500">{t.soil}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-green-950">
              {crop.soil}
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-4">
            <Droplets className="mb-3 text-green-700" size={24} />
            <p className="text-sm text-gray-500">{t.water}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-green-950">
              {crop.water}
            </p>
          </div>
        </div>

        <div className="grid gap-7 p-5 sm:grid-cols-2 sm:p-8">
          {sections.map(({ title, icon: Icon, items }) => (
            <section key={title}>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-green-900">
                <Icon size={21} />
                {title}
              </h3>

              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={`${title}-${index}`} className="flex gap-3 text-sm leading-6 text-gray-700">
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="sm:col-span-2">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-extrabold text-green-900">
              <Leaf size={21} />
              {t.harvest}
            </h3>
            <p className="rounded-2xl bg-lime-50 p-4 text-sm leading-7 text-gray-700">
              {crop.harvest}
            </p>
          </section>

          <section className="sm:col-span-2">
            <h3 className="mb-2 font-bold text-amber-900">{t.safety}</h3>
            <p className="rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-950">
              {t.safetyText}
            </p>
          </section>
        </div>

        <div className="border-t border-gray-100 p-5 text-right">
          <button
            onClick={onClose}
            className="rounded-xl bg-green-800 px-6 py-3 font-bold text-white hover:bg-green-900"
          >
            {t.close}
          </button>
        </div>
      </article>
    </div>
  );
}