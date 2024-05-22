import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './components/Routes/Routes';
import Home from './components/Pages/Home/Home/Home';
import OurShop from './components/Pages/Shop/OurShop';
import LogIn from './components/Pages/LogIn/LogIn';
import Registration from './components/Pages/Registration/Registration';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/ourShop',
        element: <OurShop />
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/registration',
        element: <Registration />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
