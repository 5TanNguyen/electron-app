import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Calendar from './pages/Calendar'
import Me from './pages/Me'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home title="NodeCafe" />
      </MainLayout>
    )
  },
  {
    path: '/hello',
    element: (
      <MainLayout>
        <Home title="Hello" />
      </MainLayout>
    )
  },
  {
    path: '/calendar',
    element: (
      <MainLayout>
        <Calendar />
      </MainLayout>
    )
  },
  {
    path: '/toi',
    element: (
      <MainLayout>
        <Me />
      </MainLayout>
    )
  }
])

function App(): React.JSX.Element {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
