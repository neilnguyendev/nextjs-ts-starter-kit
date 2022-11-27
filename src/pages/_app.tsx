import '../styles/global.scss';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import React from 'react';
import { Provider } from 'react-redux';

import { wrapper } from '@/redux/store';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;
