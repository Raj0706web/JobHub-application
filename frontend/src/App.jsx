import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from './components/Home';
import AuthShell from './components/auth/AuthShell';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Jobs } from './components/Jobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <AuthShell />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  },
  {
    path:"/jobs",
    element:<Jobs/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
