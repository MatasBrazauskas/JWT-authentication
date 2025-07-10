import validator from 'validator'
import type { FormObj, FormError } from './types';

export const formValidationErrors = (obj: FormObj) : FormError => {
    let errors: FormError = {};
    if(obj.username.length === 0){
        errors.username = "Add Password";
    }
    if(obj.password.length === 0){
        errors.password = "Add Password";
    }
    if(obj.email.length === 0 || validator.isEmail(obj.email) === false){
        errors.email = "Enter Valid Email";
    }

    return errors;
}