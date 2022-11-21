import Image from 'next/image';

import MainLayout from '@/components/Layouts/MainLayout';
import banner from '@/public/assets/images/nextjs-banner.png';

export default function Index() {
  return (
    <MainLayout
      title="Home"
      description="Next.js Typescript Starter Kit is the perfect starter code for your project. Build your React application with the Next.js framework."
    >
      <div className="flex justify-center py-4">
        <Image
          src={banner}
          alt="Next.js banner"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <h1 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
    </MainLayout>
  );
}
