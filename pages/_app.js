import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '../src/components/AutoDismissAlert/AutoDismissAlert.scss'
import '../src/components/DeclensionPractice/DeclensionPractice.scss'
import { AppProvider } from '../src/context/AppContext'
import Header from '../src/components/Header/Header'
import AutoDismissAlert from '../src/components/AutoDismissAlert/AutoDismissAlert'
import { useAppContext } from '../src/context/AppContext'

function AppContent ({ Component, pageProps }) {
  const { user, msgAlerts, deleteAlert } = useAppContext()

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert key={msgAlert.id} {...msgAlert} deleteAlert={deleteAlert} />
      ))}
      <main className='container'>
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
