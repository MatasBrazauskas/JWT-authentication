import { type ActionState } from "../Utils/types";

const pageDispatch = (action: ActionState, navigate: (path: string) => void) : void => 
{
    switch(action.type)
    {
        case 'LOGIN':
        case 'REGISTER':
        case 'SEND-EMAIL':
            navigate(`/${action.type.toLowerCase()}`);
            break;
        default:
            navigate('/');
    }
}

export default pageDispatch;