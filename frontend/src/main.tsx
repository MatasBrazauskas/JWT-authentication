import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store  from './Store/store';

import { LOGIN_URL, REGISTER_URL } from './Utils/constants';

const LoginRegisterPage = lazy(() =>  import('./Pages/AuthenticationPage'));
const AnalyzePage = lazy(() => import('./Pages/AnalyzePage'));
const Home = lazy(() => import('./Pages/HomeNavigationPage'));

function App()
{
   return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Home/>
                }/>
                <Route path='/register' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginRegisterPage URL={REGISTER_URL} stage={"REGISTER"}/>
                    </Suspense>
                }/>

                <Route path='/login' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginRegisterPage URL={LOGIN_URL}  stage={"LOGIN"}/>
                    </Suspense>
                }/>

                <Route path='/board' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <AnalyzePage />
                    </Suspense>
                }/>
                <Route path='*' element={
                    <div>Error 404</div>
                }/> 
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
