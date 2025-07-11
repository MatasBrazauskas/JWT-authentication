import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from './Pages/AuthenticationPage'
import RedirectPage from './Pages/RedirectPage';

import { LOGIN_URL, REGISTER_URL } from './Utils/constants';
import SendEmailsPage from './Pages/SendEmailsPage';

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RedirectPage/>}/>
                <Route path="register" element={<AuthenticationPage URL={REGISTER_URL}/>}/>
                <Route path="login" element={<AuthenticationPage URL={LOGIN_URL}/>}/>
                <Route path='send-emails' element={<SendEmailsPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
