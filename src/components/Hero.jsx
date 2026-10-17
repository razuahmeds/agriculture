/** @format */

import { ArrowRight, Leaf, Sprout } from "lucide-react";

export default function Hero({ t }) {
  return (
    <section
      id='home'
      className='relative isolate min-h-[650px] overflow-hidden bg-green-950 sm:min-h-[700px]'>
      <img
        src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90'
        alt='Green agricultural fields'
        className='absolute inset-0 -z-20 h-full w-full object-cover'
      />

      <div className='absolute inset-0 -z-10 bg-gradient-to-r from-green-950/90 via-green-900/65 to-green-950/15' />

      <div className='container-width flex min-h-[650px] items-center py-20 sm:min-h-[700px]'>
        <div className='max-w-3xl text-white'>
          <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur'>
            <Leaf size={17} />
            {t.eyebrow}
          </span>

          <h1 className='max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl'>
            {t.heroTitle}
          </h1>

          <p className='mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-xl'>
            {t.heroText}
          </p>

          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href='#crops'
              className='inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-4 font-bold text-green-950 transition hover:bg-lime-300'>
              <Sprout size={20} />
              {t.explore}
              <ArrowRight size={18} />
            </a>

            <a
              href='#guides'
              className='rounded-xl border border-white/60 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20'>
              {t.guides}
            </a>
          </div>

          <div className='mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/25 pt-6'>
            <div>
              <p className='text-2xl font-extrabold sm:text-3xl'>08+</p>
              <p className='mt-1 text-sm text-green-100'>{t.crops}</p>
            </div>
            <div>
              <p className='text-2xl font-extrabold sm:text-3xl'>05</p>
              <p className='mt-1 text-sm text-green-100'>Languages</p>
            </div>
            <div>
              <p className='text-2xl font-extrabold sm:text-3xl'>100%</p>
              <p className='mt-1 text-sm text-green-100'>Farm Focus</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href='#categories'
        aria-label='Explore categories'
        className='absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/90 sm:block'>
        ↓
      </a>
    </section>
  );
}
