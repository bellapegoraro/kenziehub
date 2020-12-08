import {useHistory} from 'react-router-dom';

const Home = () =>{
    const history = useHistory();
    return(
        <div>
            <div><h1>Kenzie Hub</h1></div>
            <label>Já tenho conta</label>
            <button onClick={history.push('/login')}>Login</button>
            <label>Não tenho conta</label>
            <button onClick={history.push('/cadastro')}>Cadastre-se</button>
            <label>Entrar sem fazer login</label>
            <button onClick={history.push('/devs')}>Devs</button>
            <footer>Todos os direitos reservados</footer>
        </div>
    )
}

export default Home