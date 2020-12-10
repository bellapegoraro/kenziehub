import {
    Col1,
    Col2,
    Col3,
    Container
} from './style';
import {Link} from 'react-router-dom';
import Avatar from './images/user-avatar.jpg'
import {useSelector, useDispatch} from 'react-redux';
import userProfileThunk from '../../store/modules/userProfile/thunk';

const UserProfile = () =>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.userProfile)
    return(
        <Container>
            <Link onClick={() => dispatch(userProfileThunk(user))}to='/profile'>Perfil</Link>
            <Col1>
                <h3>{user.name}</h3>
                <img src={Avatar} alt="user-avatar"/>
                <Link>Edital Perfil</Link>
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