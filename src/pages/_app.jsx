import 'focus-visible'
import '@/styles/tailwind.css'
import Head from 'next/head'
import '@/styles/global.css'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
// redux
import { store, persistor } from '@/redux/store'

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  )
}
