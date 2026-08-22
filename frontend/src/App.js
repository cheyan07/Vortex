import './App.css';
import  Signup  from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./components/Homepage.jsx";
import ErrorPage from './components/ErrorPage.jsx';
import useGetUser from './hooks/useGetUser.jsx';
import {createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { authUser } = useSelector((store) => store.user);
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

const PublicRoute = ({ children }) => {
  const { authUser } = useSelector((store) => store.user);
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <ProtectedRoute><HomePage/></ProtectedRoute>
    
  },
  {
    path:"/register",
    element: <PublicRoute><Signup/></PublicRoute>
  },
  {
    path:"/login",
    element: <PublicRoute><Login/></PublicRoute>
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

function App() {
  useGetUser();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
