import Adduser from './adduser/Adduser'
import './App.css'
import User from './getUser/User'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Update from './updateuser/Update'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: <Adduser />
    },
    {
      path: '/update/:id',
      element: <Update />
    },
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
