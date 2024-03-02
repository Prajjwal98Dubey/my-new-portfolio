import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Carrer from './pages/Carrer'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/carrer',
    element:<Carrer/>
  },
  {
    path:'/projects',
    element:<Projects/>
  },
  {
    path:'/skills',
    element:<Skills/>
  }
])

export default App
