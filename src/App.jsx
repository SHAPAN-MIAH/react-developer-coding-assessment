import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout/RootLayout";
import Home from './Pages/Home/Home';
import UserProfile from './Pages/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path:"/",
        element:<Home />
        
      },
      {
        path: "/user/:id",
        element: <UserProfile/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
