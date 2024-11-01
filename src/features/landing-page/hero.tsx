'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className='my-10 flex gap-4'>
      <Button onClick={() => console.log('clicked')}>Get Started</Button>
      <Button variant='outline' asChild>
        <Link href='https://nextjs.org/' target='_blank'>
          Learn more
        </Link>
      </Button>
    </div>
  );
};
