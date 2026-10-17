/** @format */

import { ArrowUpRight, Clock3, Sprout } from "lucide-react";

export default function CropCard({ crop, lang, t, onDetails }) {
  const name = crop.name[lang] || crop.name.en;
  const description = crop.description[lang] || crop.description.en || "";

  return (
    <article className='group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='relative h-56 overflow-hidden bg-green-100'>
        <img
          src={crop.image}
          alt={name}
          loading='lazy'
          className='h-full w-full object-cover transition duration-700 group-hover:scale-110'
        />

        <span className='absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm'>
          <Sprout size={14} />
          {t[crop.category] || t.crops}
        </span>
      </div>

      <div className='p-5'>
        <h3 className='text-xl font-bold text-green-950'>{name}</h3>

        <p className='mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-gray-600'>
          {description}
        </p>

        <div className='mt-4 flex items-center gap-2 text-sm text-gray-600'>
          <Clock3 size={17} className='shrink-0 text-green-700' />
          <span>{crop.days}</span>
        </div>

        <button
          onClick={() => onDetails(crop)}
          className='mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800'>
          {t.details}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  );
}
