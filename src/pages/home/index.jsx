import {useHistory} from 'react-router-dom';
import {
    Container,
    TopBar,
    Label,
    Button,
    Footer,
    Content
} from './style';

const Home = () =>{
    const history = useHistory();
    return(
        <Container>
            <TopBar><h1>Kenzie <br/> Hub</h1></TopBar>
            <Content>
                <Label>Já tenho conta</Label>
                <Button onClick={() => history.push('/login')}>Login</Button>
                <Label>Não tenho conta</Label>
                <Button onClick={() => history.push('/cadastro')}>Cadastre-se</Button>
                <Label>Entrar sem fazer login</Label>
                <Button onClick={() => history.push('/devs')}>Devs</Button>
                <Footer>Todos os direitos reservados</Footer>
            </Content>  
        </Container>
    )
}

export default Home