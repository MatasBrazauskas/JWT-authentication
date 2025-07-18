import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import type { FormObj, FormError } from '../Utils/types';
import { formValidationErrors } from '../Utils/formValidationErrors';
import { type AuthenticationProps } from '../Utils/types';
import gettingJWT from '../Services/gettingJWT';
import { JWT } from '../Utils/constants';

import { type AppDispatch, type RootState } from '../Store/store';
import { useDispatch } from 'react-redux';

import { setPhase } from '../Store/appSlice';
import { BarLoader } from 'react-spinners';

function AuthenticationPage({URL} : AuthenticationProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isLoading: boolean = useSelector((state: RootState) => state.appState.phase === 'LOADING');

    const username = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<FormError>({});

    const focusInput = async (e: React.FormEvent) => {
        e.preventDefault();

        const formObj: FormObj = {
            username: username.current!.value,
            password: password.current!.value,
            email: email.current!.value,
        }

        setErrors(formValidationErrors(formObj));

        if(Object.keys(errors).length !== 0){
            console.log(errors);
            return;
        }

        dispatch(setPhase('LOADING'));
        const jwt = await gettingJWT(formObj, URL);
        console.log(jwt);

        if(jwt){
            sessionStorage.setItem(JWT, jwt);
            navigate('/board');
            dispatch({type: 'BOARD'});
        }else{
            dispatch(setPhase('REGISTER'));
        }
    };

    const inputsType = showPassword ? 'text' : 'password';

    return (
        <form onSubmit={(e) => focusInput(e)}>
            {isLoading && <BarLoader/>}
            <div>Login Page</div>
            <div>
                <input type='text' ref={username} placeholder='Name' autoFocus/>
                {errors.username && <div>{errors.username}</div>}
            </div>

            <div>
                <input type={inputsType} ref={password} placeholder='Password'/>
                <div>
                    <input type='checkbox' onChange={() => setShowPassword(!showPassword)} />
                    <label>Show Password</label>
                </div>
                {errors.password && <div>{errors.password}</div>}
            </div>

            <div>
                <input type='text' ref={email} placeholder='Email adress'/>
                {errors.email && <div>{errors.email}</div>}
            </div>

            <div>
                <button type='submit'>Sumbit</button>
            </div>
    </form>
  );
}

export default AuthenticationPage;
