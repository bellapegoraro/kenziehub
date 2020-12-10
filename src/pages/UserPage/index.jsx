import {
    Col1,
    Col2,
    Col3,
    Container
} from './style';

const UserProfile = () =>{
    return(
        <Container>
            <Col1>
                <h3>Ana Maria</h3>
            </Col1>
            <Col2>
                <h4>Trabalhos</h4>
            </Col2>
            <Col3>
                <h4>Dados pessoais</h4>
            </Col3>
        </Container>
    )
}

export default UserProfile