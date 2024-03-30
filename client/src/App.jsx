import Main from './Pages/Main';
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Navigate } from 'react-router-dom';
import {routes} from '../src/constants/routes.js';
import ErrorComponent from '../Common/ErrorComponent.jsx';
import { Suspense,lazy } from 'react';
import SuspenseLoader from '../Common/SuspenseLoader.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* default */}
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>             
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element= {<routes.emails.element/>} errorElement={ < ErrorComponent/> }/>
        <Route path={routes.view.path} element={<routes.view.element/>} errorElement={ < ErrorComponent/> } />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={< SuspenseLoader/>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
