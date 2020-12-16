import {
    Container,
} from './style';

const Alert = ({added}) =>{
   

    return(
        <Container>
           { added === true ? 'Usuário já foi adicionado' :  'Adicionado aos favoritos'}
        </Container>
    )
}

export default Alert