import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Contact from './components/contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routing from './routing/routing';
import Header from './components/header';


function App() {

  const myrouter = createBrowserRouter([
    {
      path: '/',
      element: <Routing />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={myrouter}></RouterProvider>;
}

export default App;
