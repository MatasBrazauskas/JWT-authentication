import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthenticationPage from './Pages/AuthenticationPage'

import { LOGIN_URL, REGISTER_URL } from './Utils/constants';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticationPage URL={LOGIN_URL}/>
  </StrictMode>,
)
