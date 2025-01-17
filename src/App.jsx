import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LoadingProvider } from './context/LoadingContext';

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default function Root() {
  return (
    <LoadingProvider>
      <App />
    </LoadingProvider>
  );
}
