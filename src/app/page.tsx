import { Hero } from '@/features/landing-page/hero';

export default function Home() {
  return (
    <div className='container h-full bg-gray-100 py-10'>
      <h1 className='mb-4 text-4xl font-bold'>Hello Next.js playground</h1>
      <main className='flex flex-col'>
        <Hero />
      </main>
    </div>
  );
}
