/** @format */

import { Leaf, Apple, Wheat, Sprout } from "lucide-react";

const categories = [
  {
    id: "vegetables",
    titleKey: "vegetables",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    Icon: Leaf,
  },
  {
    id: "fruits",
    titleKey: "fruits",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7UM3W7aX7sirTGkwSAOhdQJMzA6d_g6EMqLdfTX3CamiARDfSib8IbSN&s=10",
    Icon: Apple,
  },
  {
    id: "grains",
    titleKey: "grains",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPkgLiu_LKcNhwvnKyzQ3C5yFRHG-mOlWgPIetvo1PiB3wBOyiCn8Zfp6&s=10",
    Icon: Wheat,
  },
];

export default function CategorySection({ t, onSelect }) {
  return (
    <section id='categories' className='py-16 sm:py-20'>
      <div className='container-width'>
        <div className='mb-8 max-w-2xl'>
          <p className='mb-2 text-sm font-bold uppercase tracking-widest text-green-700'>
            <Sprout size={16} className='mr-2 inline' />
            {t.category}
          </p>
          <h2 className='text-3xl font-extrabold text-green-950 sm:text-4xl'>
            {t.categories}
          </h2>
          <p className='mt-3 leading-7 text-gray-600'>{t.categoriesText}</p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {categories.map(({ id, titleKey, image, Icon }) => (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className='group relative h-64 overflow-hidden rounded-3xl text-left shadow-sm'>
              <img
                src={image}
                alt={t[titleKey]}
                loading='lazy'
                className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent' />

              <div className='absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white'>
                <div>
                  <span className='mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-green-950'>
                    <Icon size={23} />
                  </span>
                  <h3 className='text-2xl font-bold'>{t[titleKey]}</h3>
                </div>
                <span className='rounded-full border border-white/60 px-4 py-2 text-sm font-semibold transition group-hover:bg-white group-hover:text-green-900'>
                  {t.explore} →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
