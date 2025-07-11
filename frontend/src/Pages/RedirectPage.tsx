import pageDispatch from "../Store/store";
import { useNavigate } from "react-router-dom";
import { type ActionState } from "../Utils/types";


function RedirectPage(){
    const navigate = useNavigate();

    const handleAction = (action: ActionState) => {
        pageDispatch(action, navigate);
    };

    return (
        <div>
            <button onClick={() => handleAction({type:'LOGIN'})}>Login Page</button>
            <button onClick={() => handleAction({type:'REGISTER'})}>Register Page</button>
        </div>
    );
};

export default RedirectPage;