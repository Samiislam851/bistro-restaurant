import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Layout from './Layout/Layout';
function App() {
  const [count, setCount] = useState(0)



  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <div>404 error</div> ,
      children : [
        {
          path:"/",
          element: <Homepage></Homepage>
        },
        {
          path:"/",
          element: <Homepage></Homepage>
        },

      ]
    },
  ]);
  
  
  
  


  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
