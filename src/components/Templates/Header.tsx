import Link from 'next/link';
import type { ReactNode } from 'react';

type IProps = {
  title: string;
  description: string;
};

const Header = (props: IProps) => {
  const LiComponent = (href: string, text: string): ReactNode => {
    return (
      <li className="mr-6">
        <Link
          href={href}
          className="border-none text-gray-700 hover:font-semibold hover:text-black"
        >
          {text}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="w-full">
        <div className="border-b border-gray-300 py-3">
          <ul className="flex flex-wrap text-xl">
            {LiComponent('/', 'Home')}
            {LiComponent('/users', 'Users')}
          </ul>
        </div>
        <div className="py-8">
          <div className="text-3xl font-bold text-gray-900">{props.title}</div>
          <div className="text-xl">{props.description}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
