import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Create from './Create'
import Search from './Search'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Search/>,
    },
    {
      path: '/create',
      element:<Create/>
    }
  ])
  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
