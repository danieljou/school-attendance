
// import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>

      <Provider store={store}>
      <Toaster />
        <RouterProvider router={routes} />
      </Provider>
    </>
  )
}

export default App
