import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Calendar from './pages/Calendar'

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
