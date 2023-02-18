import 'semantic-ui-css/semantic.min.css'
import '@/styles/global.css';
import type { AppProps } from 'next/app'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
