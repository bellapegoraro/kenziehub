import {
    Col1,
    Col2,
    Col3,
    Container
} from './style';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import userProfileThunk from '../../store/modules/userProfile/thunk';

const UserProfile = () =>{
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.userProfile)
    console.log(userProfile)
    return(
        <Container>
            <Link onClick={() => dispatch(userProfileThunk(userProfile))}to='/profile'>Perfil</Link>
            <Col1>
                <Link to='/profile/edit'>Editar Perfil</Link>
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