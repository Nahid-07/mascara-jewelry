import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <RouterProvider router={router}>
      
      </RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
