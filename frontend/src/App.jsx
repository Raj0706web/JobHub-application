import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from './components/Home';
import AuthShell from './components/auth/AuthShell';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Jobs } from './components/Jobs';
<<<<<<< HEAD
=======
import { Browse } from './components/Browse';
import { AboutSection } from './components/AboutSection';
import { Profile } from './components/Profile';
import { JobDescription } from './components/JobDescription';
>>>>>>> 8da8c88 (16/08/25)

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
<<<<<<< HEAD
=======
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/about",
    element:<AboutSection/>
  },
  {
    path:"/profile",
    element:<Profile/>
>>>>>>> 8da8c88 (16/08/25)
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
