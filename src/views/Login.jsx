import LoginForm from "../components/login/LoginForm";
import { LoginContainer } from "../components/styles/Container.styled";


const Login = () => {
    return (
        <>
            <LoginContainer>
                <img src="img/Logo-Hello.png" alt="robot" width="100" />
            </LoginContainer>
            <LoginForm />
        </>
    );
}

export default Login;
