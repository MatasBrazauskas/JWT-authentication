import { useNavigate } from "react-router-dom";

function HomeNavigationPage() {
    const navigate = useNavigate(); // useNavigate is now called inside a component that is a child of BrowserRouter

    return (
        <div>
            <button onClick={() => navigate("register")}>Register</button>
            <button onClick={() => navigate("login")}>Login</button>
        </div>
    );
}
export default HomeNavigationPage;