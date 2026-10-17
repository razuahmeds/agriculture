/** @format */

import { Sprout, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className='bg-green-950 text-white'>
      <div className='container-width grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3'>
        <div>
          <a href='#home' className='inline-flex items-center gap-3'>
            <span className='rounded-2xl bg-lime-400 p-3 text-green-950'>
              <Sprout size={26} />
            </span>
            <span className='text-xl font-extrabold'>{t.brand}</span>
          </a>

          <p className='mt-5 max-w-sm text-sm leading-7 text-green-100'>
            {t.footer}
          </p>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t.guides}</h3>
          <div className='mt-4 flex flex-col items-start gap-3 text-sm text-green-100'>
            <a className='hover:text-lime-300' href='#categories'>
              {t.categories}
            </a>
            <a className='hover:text-lime-300' href='#crops'>
              {t.crops}
            </a>
            <a className='hover:text-lime-300' href='#products'>
              {t.products}
            </a>
          </div>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t.contact}</h3>
          <div className='mt-4 space-y-4 text-sm text-green-100'>
            <p className='flex items-center gap-3'>
              <MapPin size={18} />
              Agriculture resources (Bangladesh)
            </p>
            <p className='flex items-center gap-3'>
              <Mail size={18} />
              rukunuzzaman.razu@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='container-width flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-green-200'>
          <p>
            © {new Date().getFullYear()} {t.brand}
          </p>

          <a
            href='#home'
            className='inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20'>
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
