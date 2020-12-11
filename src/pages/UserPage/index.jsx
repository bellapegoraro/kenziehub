import {
    Col1,
    Col2,
    Col3,
    Container,
    Name,
    Avatar,
    Bio,
    StyledLink,
    Button,
    Tecnologias,
} from './style';
import userAvatar from './images/user-avatar.png'
import {Link} from 'react-router-dom';
import api from "../../services/api";
import {useState, useEffect} from 'react';

const UserProfile = () =>{
    
    const [user, setUser] = useState({})
    console.log(user)

    useEffect(() =>{
        api.get("/profile").then((res) => setUser(res.data))
    }, []);
    


    

    return(
        <>
        <Container>
            <Col1>
                <Name>{user.name}</Name>
                {user.avatar_url ? <Avatar src={user.avatar_url} alt={user.name}/>:<Avatar src={userAvatar} alt={user.name}/>}
                <StyledLink to="/profile/edit">Editar Perfil</StyledLink>
                <Bio>{user.bio}</Bio>
                <Tecnologias>
                    {user.techs.map((tech) =>{
                        return(
                            <li>{tech.title}</li>
                        )
                    })}

                </Tecnologias>
                <Button>Adicionar Tecnologia</Button>
                <Link to='/profile/edit'>Editar Perfil</Link>
            </Col1>
            <Col2>
                <h4>Trabalhos</h4>
                <div>
                    {user.works.map((work) =>{
                        return(
                            <li>{work.title}</li>
                        )
                    })}

                </div>
                <Button>Adicionar Trabalho</Button>
            </Col2>
            <Col3>
                <h4>Dados pessoais</h4>
                <p>{user.contact}</p>
                <p>{user.email}</p>
                <p>{user.course_module}</p>
            </Col3>
        </Container>
        </>
        
    )

    
}

export default UserProfile