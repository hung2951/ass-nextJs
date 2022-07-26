import '../styles/globals.css'
import LayoutClient from '@/components/layouts/LayoutClient';
import { AppPropsWithLayout } from '@/models/layout';
import { SWRConfig } from 'swr';
import instance from '@/api/instance';
import "bootstrap/dist/css/bootstrap.min.css"
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? LayoutClient;
  return (
    <div className="container min-w-full m-auto">
      <LayoutWapper>
        <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
          <Component {...pageProps} />
        </SWRConfig>
      </LayoutWapper>
    </div>

  )
}

export default MyApp
