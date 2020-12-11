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
    align-items: start;
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
`
const Avatar = Styled.img `
    width: 100px;
    box-shadow: 3px 3px 5px #3838;
    padding: 2%;
    border-radius: 50%;
`
const Bio = Styled.p `
    color: #001F43
    font-weight: 200;
    text-align: center;
`

const StyledLink = Styled(Link) `

`

const Tecnologias = Styled.div `

`

const Button = Styled.button `

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
}