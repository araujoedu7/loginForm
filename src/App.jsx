// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './componentes/areaLogin';
import { AreaCadastro } from './componentes/areaCadastro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/register',
    element: <AreaCadastro />
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
