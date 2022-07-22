import '../styles/globals.css'
import LayoutClient from '@/components/layouts/LayoutClient';
import { AppPropsWithLayout } from '@/models/layout';
import { SWRConfig } from 'swr';
import instance from '@/api/instance';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? LayoutClient;
  return (
    <LayoutWapper>
      <SWRConfig value={{fetcher: async (url)=> await instance.get(url)}}>
          <Component {...pageProps} />
      </SWRConfig>
    </LayoutWapper>
)
}

export default MyApp