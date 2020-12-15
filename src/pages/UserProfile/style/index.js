import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = Styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 90vh;
    width: 90vw;
    margin: 0 auto;
    color: #001F43;
    z-index: -1;
    @media(max-width: 1000px){
        flex-direction: column;
        height: 100vh;
      }
    
`
const Col1 = Styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 5px #00000029;
    padding: 2%;
    width: 20vw;
    @media(max-width: 1000px){
        box-shadow: none;
        margin-top: 1%;
        width: 90vw;
      }
`
const Col2 = Styled.div `
    display: flex;
    flex-direction: column;
    width: 50%;
    @media(max-width: 1000px){
        width: 90vw;
      }
`
const Col3 = Styled.div `
    display: flex;
    flex-direction: column;
    width: 20vw;
    @media(max-width: 1000px){
        display: none;
      }
`
const Col4 = Styled.div `
    display: none;
    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
      }
`

const Name = Styled.h3 `
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
    font-weight: 400;
    text-align: left;
`
const StyledLink = Styled(Link) `
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
    font-size: 1.3rem;
`
const Tecnologias = Styled.div `
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
    font-size: 0.8rem;
    margin: 5% auto;
    margin-bottom: 2%;
    &:hover{
        background-color: #023b7d;
    }
`
const Label = Styled.label `
    color: #3D86D9;
    font-weight: 900;
    font-size: 0.8rem;
`

const Works = Styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WorkTitle = Styled.h5 `
    color: #3D86D9;
    font-size: 1.5rem;
    font-weight: 900;
`

const Header = Styled.div `
    display: flex;
    margin-top: 5%;
    @media(max-width: 1000px){
        display: none;
      }
`
const HeaderTitle = Styled.h1 `
    color: #3D86D9;
    font-weight: 900;
`
const HeaderBar = Styled.div ` 
    background-color: #001F43;
    width: 85%;
    height: 12px;
    margin-left: 2%;
    margin-top: 1.5%;
    @media(max-width: 1000px){
        margin-top: 5%;
      }
`
const WorkHeader = Styled.div `
    display: flex;
    justify-content: space-between;
`
export {
    Col1,
    Col2,
    Col3,
    Col4,
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
    Label,
    Works,
    Header,
    HeaderTitle,
    HeaderBar,
    WorkTitle,
    WorkHeader
}