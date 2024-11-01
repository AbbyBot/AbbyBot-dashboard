import React, { useEffect, useContext } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Init from './components/Init';

function App() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Simulate loading of other components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this timeout as needed

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <RouterProvider router={router} />
  );
}

export default function Root() {
  return (
    <LoadingProvider>
      <Init />
      <App />
    </LoadingProvider>
  );
}
