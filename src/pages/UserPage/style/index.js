import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = Styled.div `
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
`

const Col1 = Styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 5px #3838;
    padding: 2%;
`
const Col2 = Styled.div `
    display: flex;
    flex-direction: column;
`
const Col3 = Styled.div `
    display: flex;
    flex-direction: column;
`

const Name = Styled.h3 `
    color: #001F43;
    font-weight: 900;
    font-size: 1.6rem;
    margin-bottom: 5%;
    text-align: center;
`
const Avatar = Styled.img `
    width: 100px;
    box-shadow: 3px 3px 5px #3838;
    padding: 2%;
    border-radius: 50%;
`
const Bio = Styled.p `
    color: #001F43;
    font-weight: 400;
    text-align: left;
`

const StyledLink = Styled(Link) `
    color: #001F43;
    font-weight: 400;
    text-align: center;
    font-size: 0.8rem;
    text-decoration: none;
    margin-top: 5%;
`
const Titles = Styled.h4 `
    margin-top: 5%;
    margin-bottom: 5%;
    color: #001F43;
`

const Tecnologias = Styled.div `
    color: #001F43;
`
const Tecnologia = Styled.div `
    margin-bottom: 5%;
`
const Bar = Styled.div `
    background-color: #3D86D9;
    height: 7px;
    border-radius: 20px;
`

const Button = Styled.button `
    background-color: #001F43;
    border: none;
    border-radius: 10px;
    color: #fff;
    width: 120px;
    height: 40px;
    &:hover{
        background-color: #023b7d;
    }
`

export {
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
}