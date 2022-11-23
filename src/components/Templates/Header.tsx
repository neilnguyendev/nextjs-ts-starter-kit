import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import configs from '@/configs';
import authService from '@/services/auth';

type IProps = {
  title: string;
  description: string;
};

const Header = (props: IProps) => {
  const router = useRouter();
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

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
        <div className="flex items-center justify-between border-b border-gray-300 py-3">
          <ul className="flex flex-wrap text-xl">
            {LiComponent('/', 'Home')}
            {LiComponent('/users', 'Users')}
          </ul>

          {isCSR && authService.cookies.hasAccessToken() ? (
            <a
              className="cursor-pointer"
              onClick={async () => {
                authService.cookies.deleteAccessToken();
                await router.push(configs.loginPath);
              }}
            >
              Logout
            </a>
          ) : (
            <a
              className="cursor-pointer"
              onClick={async () => {
                await router.push(configs.loginPath);
              }}
            >
              Login
            </a>
          )}
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
