import '../styles/globals.css'
import { AppProvider, useAppContext } from '../src/context/AppContext'
import Header from '../src/components/Header/Header'
import AutoDismissAlert from '../src/components/AutoDismissAlert/AutoDismissAlert'

function AppContent ({ Component, pageProps }) {
  const { user, msgAlerts, deleteAlert } = useAppContext()

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert key={msgAlert.id} {...msgAlert} deleteAlert={deleteAlert} />
      ))}
      <main className='container mx-auto px-4'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default function App ({ Component, pageProps }) {
  return (
    <AppProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </AppProvider>
  )
}
