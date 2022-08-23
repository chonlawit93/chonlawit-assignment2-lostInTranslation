import LoginForm from "../components/login/LoginForm";
import { LoginContainer } from "../components/styles/Container.styled";
import { ImageHello } from "../components/styles/Image.styled";
import { TitleLogin } from "../components/styles/Texts.styled";
const Login = () => {
    return (
        <>
            <LoginContainer>
                <ImageHello src="img/Logo-Hello.png" alt="robot" />
                <TitleLogin>
                Lost in Translation
                <br/>
                Get started
                </TitleLogin>
                
            </LoginContainer>
            <LoginForm />
        </>
    );
}

export default Login;
