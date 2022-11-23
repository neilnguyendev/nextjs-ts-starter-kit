import type { ReactNode } from 'react';

import Footer from '@/components/Templates/Footer';
import Header from '@/components/Templates/Header';
import Meta from '@/components/Templates/Meta';
import configs from '@/configs';

type IMainProps = {
  title: string;
  description: string;
  canonical?: string;
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => {
  return (
    <>
      <Meta
        title={`${props.title} | ${configs.title}`}
        description={props.description}
        canonical={props.canonical}
      />
      <div className="w-full px-1 text-gray-700">
        <div className="mx-auto max-w-screen-md">
          <Header title={props.title} description={props.description} />

          <div className="content py-5 text-xl">{props.children}</div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
