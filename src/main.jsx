import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';

// Import all your route components
import TheWeekend from './Components/TheWeekend/TheWeekend.jsx';
import RacePhotos from './Components/RacePhotos/RacePhotos.jsx';
import RaceCourse from './Components/RaceCourse/RaceCourse.jsx';
import Performance from './Components/Performance/Performance.jsx';
import Contact from './Components/Contact/Contact.jsx';

// Create your BrowserRouter instance with route configurations
const router = createBrowserRouter([
  { path: "/", element: <App /> }, // This route will render App component for the root path
  { path: "/theweekend", element: <TheWeekend /> }, // Specify the correct path for TheWeekend component
  { path: "/racephotos", element: <RacePhotos /> }, 
  { path: "/racecourse", element: <RaceCourse /> }, 
  { path: "/performance", element: <Performance /> }, 
  { path: "/contact", element: <Contact /> }, 
]);

// Render the RouterProvider with your router instance
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
