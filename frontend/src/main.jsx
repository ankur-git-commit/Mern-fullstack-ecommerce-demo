import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomeScreen from './pages/HomeScreen.jsx';
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomeScreen />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
