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
import DashBord from './components/Pages/Dashbord/DashBord';
import ManageItems from './components/Pages/Dashbord/ManageItems/ManageItems';
import AllUsers from './components/Pages/Dashbord/AllUsers/AllUsers';
import AddItems from './components/Pages/Dashbord/AddItems/AddItems';
import Admin from './components/Routes/Admin/Admin';
import AdminHome from './components/Pages/Dashbord/AdminHome/AdminHome';
import PrivateRoutes from './components/Routes/PrivateRoutes/PrivateRoutes';


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

  {
    path: '/dashboard',
    element: <PrivateRoutes><DashBord /></PrivateRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/manageItems',
        element: <ManageItems />
      },

      //admin routes
      {
        path: '/dashboard/users',
        element: <Admin>
          <AllUsers />
        </Admin>
      },
      {
        path: '/dashboard/addItems',
        element: <Admin>
          <AddItems></AddItems>
        </Admin>
      }
    ]
  }
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
