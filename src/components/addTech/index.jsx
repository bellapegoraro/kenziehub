import {
    Container,
    Form,
    Button,
    Input,
    TextArea,
    Label,
    Error,
} from '../addWork/style';
import {MdClose} from 'react-icons/md'
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from '../../services/api';
import Draggable from 'react-draggable'

const AddTech = ({ setVisibleTech}) =>{
    const schema = yup.object().shape({
        title: yup.string().required('Campo Obrigatório'),
        status: yup.string().required('Campo Obrigatório')
    })
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    const handleTech = (data) =>{
        api.post('/users/techs', {...data}).then(res => console.log(res))
        setVisibleTech(false)
    }

    return(
        <Draggable>
        <Container>
            <MdClose onClick={() => setVisibleTech(false)}/>
            <Form onSubmit={handleSubmit(handleTech)}>
                <Label>Tecnologia</Label>
                <Input name="title" ref={register}/>
                <Error>{errors.title?.message}</Error> 
                <Label>Nível de conhecimento</Label>
                <Input
                list="status"
                 name="status" ref={register}/>
                <Error>{errors.status?.message}</Error>
                <Button type="submit">Adicionar</Button>
                <datalist id="status">
                    <option value="Iniciante" />
                    <option value="Intermediário" />
                    <option value="Avançado" />
                </datalist>
            </Form>
        </Container>
        </Draggable>
    )
}

export default AddTech