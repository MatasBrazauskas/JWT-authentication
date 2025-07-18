import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store  from './Store/store';

import { LOGIN_URL, REGISTER_URL } from './Utils/constants';

const LoginRegisterPage = lazy(() =>  import('./Pages/AuthenticationPage'));
const Board = lazy(() => import('./Pages/Board'));

function App()
{
   return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginRegisterPage URL={REGISTER_URL}/>
                    </Suspense>
                }/>

                <Route path='/login' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginRegisterPage URL={LOGIN_URL}/>
                    </Suspense>
                }/>

                <Route path='/board' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <Board />
                    </Suspense>
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
