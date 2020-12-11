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
    Titles,
    Bar,
    Tecnologia,
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
                    <Titles>Tecnologias</Titles>
                    {user.techs && user.techs.map((tech) =>{
                        return(
                            <Tecnologia>
                                 <h5>{tech.title}</h5>
                                 {tech.status === 'Avançado' ? 
                                 <Bar style={{width:"240px"}}></Bar> : 
                                 tech.status === 'Intermediário' ? 
                                 <Bar style={{width:"180px"}}></Bar> : 
                                 <Bar style={{width:"100px"}}></Bar>}
                            </Tecnologia>
                           

                        )
                    })}
                </Tecnologias>
                <Button>Adicionar Tecnologia</Button>
            </Col1>
            <Col2>
                <Titles>Trabalhos</Titles>
                <div>
                    {user.works && user.works.map((work, index) =>{
                        return(
                            <div key={index}>
                                <h5>{work.title}</h5>
                                <p>{work.description}</p>
                                <a target="blank" href={work.deploy_url}>{work.deploy_url}</a>
                            </div>
                            
                        )
                    })}

                </div>
                <Button>Adicionar Trabalho</Button>
            </Col2>
            <Col3>
                <Titles>Dados pessoais</Titles>
                <p>{user.contact}</p>
                <p>{user.email}</p>
                <p>{user.course_module}</p>
            </Col3>
        </Container>
        </>
        
    )

    
}

export default UserProfile